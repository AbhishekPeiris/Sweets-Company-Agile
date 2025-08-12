import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { env } from "./config/env.js";
import { errorHandler } from "./middleware/errorHandler.js";

// routes
import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/products.routes.js";
import customerRoutes from "./routes/customers.routes.js";
import inventoryRoutes from "./routes/inventory.routes.js";
import orderRoutes from "./routes/orders.routes.js";

const app = express();

app.use(cors({ origin: env.CLIENT_ORIGIN, credentials: false }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use("/api/orders", orderRoutes);

// 404 for unknown API routes
app.use((req, res, next) => {
  if (req.path.startsWith("/api/"))
    return res.status(404).json({ message: "API route not found" });
  next();
});

app.use(errorHandler);

export default app;
