import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { env } from "../config/env.js";

export async function register(req, res) {
  const { name, email, password, role, phone, address } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ message: "Missing fields" });

  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ message: "Email already in use" });

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    passwordHash,
    role,
    phone,
    address,
  });
  res.status(201).json({ id: user._id, email: user.email, role: user.role });
}

export async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, isActive: true });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ sub: user._id, role: user.role }, env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.json({ token, user: { id: user._id, name: user.name, role: user.role } });
}

export async function me(req, res) {
  const user = await User.findById(req.userId).select("-passwordHash");
  if (!user) return res.status(404).json({ message: "Not found" });
  res.json({ user });
}
