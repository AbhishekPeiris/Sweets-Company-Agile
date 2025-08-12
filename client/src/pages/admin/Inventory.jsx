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
    <div className="space-y-6">
      <form
        onSubmit={create}
        className="grid gap-4 p-6 border rounded-lg shadow-lg bg-light-base border-primary-accent/20 md:grid-cols-3"
      >
        <Input
          label="Product ID"
          value={form.productId}
          onChange={(e) => setForm({ ...form, productId: e.target.value })}
          required
        />
        <Input
          label="Quantity"
          type="number"
          value={form.quantity}
          onChange={(e) =>
            setForm({ ...form, quantity: Number(e.target.value) })
          }
          required
        />
        <Button type="submit" className="self-end">
          Create Stock
        </Button>
      </form>

      <div className="space-y-4">
        {rows.map((r) => (
          <div
            key={r._id}
            className="flex items-center justify-between p-4 border rounded-lg shadow-lg bg-light-base border-primary-accent/20"
          >
            <div>
              <div className="font-semibold text-dark-base">
                {r.productId?.name || r.productId}
              </div>
              <div className="text-sm text-dark-base/70">Qty: {r.quantity}</div>
            </div>
            <div className="flex gap-2">
              <Button onClick={() => inc(r._id, 1)}>+1</Button>
              <Button
                onClick={() => inc(r._id, -1)}
                className="bg-secondary-accent hover:bg-secondary-accent/80"
              >
                -1
              </Button>
              <Button
                onClick={() => remove(r._id)}
                className="bg-red-600 hover:bg-red-700"
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
        {!rows.length && (
          <div className="p-6 text-center border rounded-lg bg-light-base border-primary-accent/20">
            <div className="text-dark-base/70">No inventory items found</div>
          </div>
        )}
      </div>
    </div>
  );
}
