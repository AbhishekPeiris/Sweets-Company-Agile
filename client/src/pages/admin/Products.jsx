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
    await products.create(form);
    setForm({ name: "", category: "", price: 0 });
    load();
  }
  async function remove(id) {
    await products.remove(id);
    load();
  }

  const cols = [
    { key: "name", header: "Name" },
    { key: "category", header: "Category" },
    { key: "price", header: "Price" },
  ];

  return (
    <div className="space-y-6">
      <form
        onSubmit={create}
        className="grid gap-4 p-6 border rounded-lg shadow-lg bg-light-base border-primary-accent/20 md:grid-cols-4"
      >
        <Input
          label="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <Input
          label="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />
        <Input
          label="Price (LKR)"
          type="number"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
          required
        />
        <Button type="submit" className="self-end">
          Add Product
        </Button>
      </form>

      <DataTable
        columns={cols}
        rows={rows}
        actions={(r) => (
          <Button onClick={() => remove(r._id)} className="bg-red-600 hover:bg-red-700">
            Delete
          </Button>
        )}
      />
    </div>
  );
}
