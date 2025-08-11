import { Router } from "express";
import {
  createCustomer,
  listCustomers,
  getCustomer,
  updateCustomer,
  deleteCustomer,
} from "../controllers/customers.controller.js";

const router = Router();

// NOTE: Add auth/role middleware when ready (e.g., requireAdmin)
router.post("/", createCustomer);
router.get("/", listCustomers);
router.get("/:id", getCustomer);
router.put("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);

export default router;
