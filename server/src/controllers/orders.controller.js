import Order from "../models/Order.js";
import Product from "../models/Product.js";
import Inventory from "../models/Inventory.js";

async function checkStock(items) {
  const ids = items.map((i) => i.productId);
  const inv = await Inventory.find({ productId: { $in: ids } });
  const map = new Map(inv.map((x) => [String(x.productId), x]));
  const missing = [];
  for (const it of items) {
    const rec = map.get(String(it.productId));
    const have = rec ? rec.quantity : 0;
    if (have < it.qty)
      missing.push({ productId: it.productId, need: it.qty, have });
  }
  return { ok: missing.length === 0, missing };
}

export async function createOrder(req, res) {
  const {
    customerId,
    items = [],
    notes,
    contactName,
    contactPhone,
    address,
  } = req.body;
  if (!items.length)
    return res.status(400).json({ message: "Order must have items" });

  const stock = await checkStock(items);
  if (!stock.ok)
    return res
      .status(400)
      .json({ message: "Insufficient stock", details: stock.missing });

  const prodIds = items.map((i) => i.productId);
  const products = await Product.find({ _id: { $in: prodIds } });
  const pmap = new Map(products.map((p) => [String(p._id), p]));

  const normalizedItems = items.map((i) => {
    const p = pmap.get(String(i.productId));
    if (!p) throw new Error("Product not found");
    return {
      productId: p._id,
      name: p.name,
      priceAtOrder: p.price,
      qty: i.qty,
    };
  });
  const total = normalizedItems.reduce(
    (s, it) => s + it.priceAtOrder * it.qty,
    0
  );

  // decrement stock (simple, non-transactional)
  for (const it of items) {
    const ok = await Inventory.findOneAndUpdate(
      { productId: it.productId, quantity: { $gte: it.qty } },
      { $inc: { quantity: -it.qty } }
    );
    if (!ok)
      return res.status(409).json({ message: "Stock changed. Try again." });
  }

  const order = await Order.create({
    customerId,
    items: normalizedItems,
    total,
    status: "pending",
    notes,
    contactName,
    contactPhone,
    address,
  });

  res.status(201).json({ data: order });
}

export async function listOrders(req, res) {
  const { customerId, status } = req.query;
  const filter = {};
  if (customerId) filter.customerId = customerId;
  if (status) filter.status = status;
  const orders = await Order.find(filter)
    .sort({ createdAt: -1 })
    .populate("customerId");
  res.json({ data: orders });
}

export async function getOrder(req, res) {
  const doc = await Order.findById(req.params.id)
    .populate("customerId")
    .populate("items.productId");
  if (!doc) return res.status(404).json({ message: "Not found" });
  res.json({ data: doc });
}

export async function updateOrderStatus(req, res) {
  const { status } = req.body;
  const allowed = [
    "pending",
    "processing",
    "dispatched",
    "delivered",
    "cancelled",
  ];
  if (!allowed.includes(status))
    return res.status(400).json({ message: "Invalid status" });
  const doc = await Order.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true }
  );
  if (!doc) return res.status(404).json({ message: "Not found" });
  res.json({ data: doc });
}

export async function cancelOrder(req, res) {
  const order = await Order.findById(req.params.id);
  if (!order) return res.status(404).json({ message: "Not found" });
  if (order.status !== "pending")
    return res
      .status(400)
      .json({ message: "Only pending orders can be cancelled" });

  for (const it of order.items) {
    await Inventory.findOneAndUpdate(
      { productId: it.productId },
      { $inc: { quantity: it.qty } },
      { upsert: true }
    );
  }
  order.status = "cancelled";
  await order.save();
  res.json({ data: order });
}

export async function deleteOrder(req, res) {
  const order = await Order.findById(req.params.id);
  if (!order) return res.status(404).json({ message: "Not found" });
  if (order.status === "pending") {
    for (const it of order.items) {
      await Inventory.findOneAndUpdate(
        { productId: it.productId },
        { $inc: { quantity: it.qty } },
        { upsert: true }
      );
    }
  }
  await order.deleteOne();
  res.json({ message: "Deleted" });
}
