import Product from "../models/Product.js";

export async function createProduct(req, res) {
  const doc = await Product.create(req.body);
  res.status(201).json({ data: doc });
}

export async function listProducts(req, res) {
  const { page = 1, limit = 20, category, q } = req.query;
  const filter = {};
  if (category) filter.category = category;
  if (q) filter.name = { $regex: q, $options: "i" };

  const docs = await Product.find(filter)
    .skip((page - 1) * limit)
    .limit(Number(limit))
    .sort({ createdAt: -1 });

  res.json({ data: docs });
}

export async function getProduct(req, res) {
  const doc = await Product.findById(req.params.id);
  if (!doc) return res.status(404).json({ message: "Not found" });
  res.json({ data: doc });
}

export async function updateProduct(req, res) {
  const doc = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!doc) return res.status(404).json({ message: "Not found" });
  res.json({ data: doc });
}

export async function deleteProduct(req, res) {
  const doc = await Product.findByIdAndDelete(req.params.id);
  if (!doc) return res.status(404).json({ message: "Not found" });
  res.json({ message: "Deleted" });
}
