import bcrypt from "bcryptjs";
import User from "../models/User.js";

/**
 * Admin creates a new customer.
 * Body: { name, email, password, phone, address }
 */
export async function createCustomer(req, res) {
  const { name, email, password, phone, address } = req.body;

  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ message: "Email already in use" });

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    passwordHash,
    role: "customer",
    phone,
    address,
  });

  res
    .status(201)
    .json({ data: { id: user._id, name: user.name, email: user.email } });
}

/**
 * List customers (admin)
 * Query: ?q=search
 */
export async function listCustomers(req, res) {
  const { q } = req.query;
  const filter = { role: "customer" };
  if (q) {
    filter.$or = [
      { name: { $regex: q, $options: "i" } },
      { email: { $regex: q, $options: "i" } },
      { phone: { $regex: q, $options: "i" } },
    ];
  }
  const users = await User.find(filter).sort({ createdAt: -1 });
  res.json({ data: users });
}

/** Get single customer (admin) */
export async function getCustomer(req, res) {
  const user = await User.findById(req.params.id);
  if (!user || user.role !== "customer")
    return res.status(404).json({ message: "Not found" });
  res.json({ data: user });
}

/** Update customer (admin) */
export async function updateCustomer(req, res) {
  const { name, phone, address } = req.body;
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { name, phone, address },
    { new: true }
  );
  if (!user || user.role !== "customer")
    return res.status(404).json({ message: "Not found" });
  res.json({ data: user });
}

/** Delete customer (admin) – hard delete for MVP */
export async function deleteCustomer(req, res) {
  const user = await User.findById(req.params.id);
  if (!user || user.role !== "customer")
    return res.status(404).json({ message: "Not found" });
  await user.deleteOne();
  res.json({ message: "Deleted" });
}
