import { useEffect, useState } from "react";
import Input from "../../components/ui/Input.jsx";
import Button from "../../components/ui/Button.jsx";
import inventory from "../../services/inventory.service.js";

export default function Inventory() {
  const [rows, setRows] = useState([]);
  const [form, setForm] = useState({ productId: "", quantity: 0 });

  async function load() {
    const r = await inventory.list();
    setRows(r.data);
  }
  useEffect(() => {
    load();
  }, []);

  async function create(e) {
    e.preventDefault();
    await inventory.create(form);
    setForm({ productId: "", quantity: 0 });
    load();
  }
  async function inc(id, n) {
    await inventory.update(id, { inc: n });
    load();
  }
  async function remove(id) {
    await inventory.remove(id);
    load();
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-black text-transparent font-fancy bg-clip-text bg-gradient-to-r from-secondary-accent to-primary-accent">
          📦 Inventory Management ✨
        </h1>
        <p className="text-lg font-modern text-dark-base/70">
          Track your magical sweet stock with precision! 🍬
        </p>
      </div>

      {/* Add Stock Form */}
      <form
        onSubmit={create}
        className="grid gap-6 p-8 border-2 shadow-2xl rounded-3xl bg-white/80 backdrop-blur-xl border-primary-accent/30 md:grid-cols-3 animate-glow"
      >
        <Input
          label="📝 Product ID"
          value={form.productId}
          onChange={(e) => setForm({ ...form, productId: e.target.value })}
          required
          placeholder="Enter product ID..."
        />
        <Input
          label="📊 Initial Quantity"
          type="number"
          value={form.quantity}
          onChange={(e) =>
            setForm({ ...form, quantity: Number(e.target.value) })
          }
          required
          placeholder="0"
        />
        <Button type="submit" className="self-end">
          ✨ Create Stock ✨
        </Button>
      </form>

      {/* Inventory Items */}
      <div className="space-y-6">
        {rows.map((r, index) => (
          <div
            key={r._id}
            className={`flex items-center justify-between p-6 border-2 rounded-3xl shadow-xl bg-white/80 backdrop-blur-xl border-primary-accent/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] ${index % 2 === 0
                ? "hover:bg-primary-accent/5"
                : "hover:bg-secondary-accent/5"
              }`}
          >
            <div className="space-y-2">
              <div className="text-xl font-bold font-fancy text-dark-base">
                🍬 {r.productId?.name || r.productId}
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-tertiary-accent/20 to-light-base/20">
                <span className="text-2xl">📦</span>
                <span className="font-semibold font-stylish text-dark-base">
                  Stock: {r.quantity} units
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={() => inc(r._id, 1)}
                className="transform bg-green-500 hover:bg-green-600 hover:scale-110"
              >
                ➕ Add
              </Button>
              <Button
                onClick={() => inc(r._id, -1)}
                className="transform bg-orange-500 hover:bg-orange-600 hover:scale-110"
              >
                ➖ Remove
              </Button>
              <Button
                onClick={() => remove(r._id)}
                className="transform bg-red-500 hover:bg-red-600 hover:scale-110"
              >
                🗑️ Delete
              </Button>
            </div>
          </div>
        ))}
        {!rows.length && (
          <div className="p-12 text-center border-2 rounded-3xl bg-white/80 backdrop-blur-xl border-primary-accent/30">
            <div className="flex flex-col items-center gap-4">
              <span className="text-8xl animate-bounce-gentle">📦</span>
              <span className="text-2xl font-bold text-transparent font-fancy bg-clip-text bg-gradient-to-r from-secondary-accent to-primary-accent">
                No Inventory Items Yet
              </span>
              <span className="text-lg font-modern text-dark-base/70">
                Create your first stock entry above! ✨
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
