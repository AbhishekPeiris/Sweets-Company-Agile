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
    <div className="grid gap-4">
      <form
        onSubmit={create}
        className="grid gap-3 p-4 bg-white rounded md:grid-cols-3"
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

      <div className="grid gap-2">
        {rows.map((r) => (
          <div
            key={r._id}
            className="flex items-center justify-between p-3 bg-white rounded shadow"
          >
            <div>
              <div className="font-medium">
                {r.productId?.name || r.productId}
              </div>
              <div className="text-sm text-gray-600">Qty: {r.quantity}</div>
            </div>
            <div className="flex gap-2">
              <Button onClick={() => inc(r._id, 1)}>+1</Button>
              <Button onClick={() => inc(r._id, -1)} className="bg-gray-600">
                -1
              </Button>
              <Button onClick={() => remove(r._id)} className="bg-red-600">
                Delete
              </Button>
            </div>
          </div>
        ))}
        {!rows.length && (
          <div className="p-4 text-gray-600 bg-white rounded">
            No inventory yet.
          </div>
        )}
      </div>
    </div>
  );
}
