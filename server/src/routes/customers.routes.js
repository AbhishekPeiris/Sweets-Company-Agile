import { Router } from "express";
import {
  createCustomer,
  listCustomers,
  getCustomer,
  updateCustomer,
  deleteCustomer,
} from "../controllers/customers.controller.js";
import { requireAuth, requireAdmin } from "../middleware/auth.js";

const router = Router();
router.post("/", requireAuth, requireAdmin, createCustomer);
router.get("/", requireAuth, requireAdmin, listCustomers);
router.get("/:id", requireAuth, requireAdmin, getCustomer);
router.put("/:id", requireAuth, requireAdmin, updateCustomer);
router.delete("/:id", requireAuth, requireAdmin, deleteCustomer);

export default router;
