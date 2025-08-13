import { useEffect, useState } from "react";
import Input from "../../components/ui/Input.jsx";
import Button from "../../components/ui/Button.jsx";
import DataTable from "../../components/tables/DataTable.jsx";
import products from "../../services/products.service.js";

export default function Products() {
  const [rows, setRows] = useState([]);
  const [form, setForm] = useState({ name: "", category: "", price: 0 });

  async function load() {
    const r = await products.list();
    setRows(r.data);
  }
  useEffect(() => {
    load();
  }, []);

  async function create(e) {
    e.preventDefault();
    const productData = {
      name: form.name,
      category: form.category,
      price: form.price,
    };
    await products.create(productData);
    setForm({ name: "", category: "", price: 0 });
    load();
  }
  async function remove(id) {
    await products.remove(id);
    load();
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-black text-transparent font-fancy bg-clip-text bg-gradient-to-r from-secondary-accent to-primary-accent">
          🍬 Products Management ✨
        </h1>
        <p className="text-lg font-modern text-dark-base/70">
          Create and manage your magical sweet products! 🎭
        </p>
      </div>

      {/* Add Product Form */}
      <form
        onSubmit={create}
        className="grid gap-6 p-8 border-2 shadow-2xl rounded-3xl bg-white/80 backdrop-blur-xl border-primary-accent/30 md:grid-cols-4 animate-glow"
      >
        <Input
          label="🏷️ Product Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          placeholder="Enter sweet name..."
        />
        <Input
          label="🎭 Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          placeholder="e.g., Cupcakes, Chocolates"
        />
        <Input
          label="💰 Price (LKR)"
          type="number"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
          required
          placeholder="0"
        />
        <Button type="submit" className="self-end">
          ✨ Add Product ✨
        </Button>
      </form>

      {/* Products Table */}
      <DataTable
        columns={[
          { key: "_id", header: "# Product ID" },
          { key: "name", header: "🍬 Sweet Name" },
          { key: "category", header: "🎭 Category" },
          {
            key: "price",
            header: "💰 Price",
            render: (product) => (
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose to-primary-accent">
                LKR {product.price}
              </span>
            ),
          },
        ]}
        rows={rows}
        actions={(r) => (
          <Button
            onClick={() => remove(r._id)}
            className="transform bg-red-500 hover:bg-red-600 hover:scale-105"
          >
            🗑️ Delete
          </Button>
        )}
      />
    </div>
  );
}
