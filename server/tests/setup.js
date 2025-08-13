import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import app from "../src/app.js";
import request from "supertest";
import bcrypt from "bcryptjs";
import User from "../src/models/User.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// Load test environment
if (process.env.NODE_ENV === 'test') {
    dotenv.config({ path: '.env.test' });
}

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

    // Use the same JWT_SECRET as the server
    const jwtSecret = process.env.JWT_SECRET || "dev_secret_change_me";
    console.log("Using JWT secret:", jwtSecret); // Debug log

    const token = jwt.sign(
        { sub: admin._id, role: "admin" },
        jwtSecret,
        { expiresIn: "1d" }
    );

    console.log("Generated token for admin:", admin._id); // Debug log
    return { admin, token };
}
