import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import app from "../src/app.js";
import request from "supertest";
import bcrypt from "bcryptjs";
import User from "../src/models/User.js";
import jwt from "jsonwebtoken";

export let mongod;
export const api = request(app);

export async function startMemoryMongo() {
  mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  await mongoose.connect(uri);
}

export async function stopMemoryMongo() {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  if (mongod) await mongod.stop();
}

// create an admin and return token
export async function createAdminAndToken() {
  const passwordHash = await bcrypt.hash("Pass1234", 10);
  const admin = await User.create({
    name: "Admin",
    email: "admin@test.com",
    passwordHash,
    role: "admin",
  });
  // mimic your env.JWT_SECRET default
  const token = jwt.sign(
    { sub: admin._id, role: "admin" },
    "dev_secret_change_me",
    { expiresIn: "1d" }
  );
  return { admin, token };
}
