import { Router } from "express";
import {
  createInventory,
  listInventory,
  getInventory,
  updateInventory,
  deleteInventory,
} from "../controllers/inventory.controller.js";
import { requireAuth, requireAdmin } from "../middleware/auth.js";

const router = Router();
router.post("/", requireAuth, requireAdmin, createInventory);
router.get("/", requireAuth, requireAdmin, listInventory);
router.get("/:id", requireAuth, requireAdmin, getInventory);
router.patch("/:id", requireAuth, requireAdmin, updateInventory);
router.delete("/:id", requireAuth, requireAdmin, deleteInventory);

export default router;
