import { Router } from "express";
import {
  createOrder,
  listOrders,
  getOrder,
  updateOrderStatus,
  cancelOrder,
  deleteOrder,
} from "../controllers/orders.controller.js";

const router = Router();

// Create order (customer)
router.post("/", createOrder);

// List: admin or by customerId query
router.get("/", listOrders);

// Detail
router.get("/:id", getOrder);

// Update status (admin)
router.patch("/:id/status", updateOrderStatus);

// Cancel (customer/admin)
router.post("/:id/cancel", cancelOrder);

// Hard delete (admin – optional)
router.delete("/:id", deleteOrder);

export default router;
