import Inventory from "../models/Inventory.js";

export async function createInventory(req, res) {
  const { productId, quantity = 0, lowStockThreshold = 10 } = req.body;
  const exists = await Inventory.findOne({ productId });
  if (exists)
    return res
      .status(400)
      .json({ message: "Inventory already exists for this product" });
  const doc = await Inventory.create({
    productId,
    quantity,
    lowStockThreshold,
  });
  res.status(201).json({ data: doc });
}

export async function listInventory(req, res) {
  const { low } = req.query;
  const filter = {};
  if (low === "true")
    filter.$expr = { $lte: ["$quantity", "$lowStockThreshold"] };
  const rows = await Inventory.find(filter)
    .populate("productId")
    .sort({ updatedAt: -1 });
  res.json({ data: rows });
}

export async function getInventory(req, res) {
  const doc = await Inventory.findById(req.params.id).populate("productId");
  if (!doc) return res.status(404).json({ message: "Not found" });
  res.json({ data: doc });
}

export async function updateInventory(req, res) {
  const { quantity, lowStockThreshold, inc } = req.body;

  if (typeof inc === "number") {
    const updated = await Inventory.findOneAndUpdate(
      { _id: req.params.id, quantity: { $gte: Math.max(0, -inc) } },
      { $inc: { quantity: inc } },
      { new: true }
    );
    if (!updated)
      return res
        .status(400)
        .json({ message: "Invalid increment or record not found" });
    return res.json({ data: updated });
  }

  const payload = {};
  if (quantity != null) {
    if (quantity < 0)
      return res.status(400).json({ message: "Quantity cannot be negative" });
    payload.quantity = quantity;
  }
  if (lowStockThreshold != null) {
    if (lowStockThreshold < 0)
      return res.status(400).json({ message: "Threshold cannot be negative" });
    payload.lowStockThreshold = lowStockThreshold;
  }

  const doc = await Inventory.findByIdAndUpdate(req.params.id, payload, {
    new: true,
  });
  if (!doc) return res.status(404).json({ message: "Not found" });
  res.json({ data: doc });
}

export async function deleteInventory(req, res) {
  const doc = await Inventory.findById(req.params.id);
  if (!doc) return res.status(404).json({ message: "Not found" });
  if (doc.quantity !== 0)
    return res
      .status(400)
      .json({ message: "Cannot delete: quantity must be 0" });
  await doc.deleteOne();
  res.json({ message: "Deleted" });
}
