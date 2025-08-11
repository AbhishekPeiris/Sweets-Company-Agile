import { Router } from "express";
import {
  createInventory,
  listInventory,
  getInventory,
  updateInventory,
  deleteInventory,
} from "../controllers/inventory.controller.js";

const router = Router();

// Admin-only in a real app (add middleware later)
router.post("/", createInventory);
router.get("/", listInventory);
router.get("/:id", getInventory);
router.patch("/:id", updateInventory); // supports { inc: +/-N } or direct fields
router.delete("/:id", deleteInventory);

export default router;
