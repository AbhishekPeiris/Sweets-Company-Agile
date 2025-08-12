import { Router } from "express";
import {
  createOrder,
  listOrders,
  getOrder,
  updateOrderStatus,
  cancelOrder,
  deleteOrder,
} from "../controllers/orders.controller.js";
import { requireAuth, requireAdmin } from "../middleware/auth.js";

const router = Router();

// create (customer)
router.post("/", requireAuth, createOrder);

// list: admin or own by query
router.get("/", requireAuth, listOrders);

// detail
router.get("/:id", requireAuth, getOrder);

// admin status update
router.patch("/:id/status", requireAuth, requireAdmin, updateOrderStatus);

// cancel (customer/admin)
router.post("/:id/cancel", requireAuth, cancelOrder);

// delete (admin)
router.delete("/:id", requireAuth, requireAdmin, deleteOrder);

export default router;
