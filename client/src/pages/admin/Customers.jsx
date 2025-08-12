import { useEffect, useState } from "react";
import Input from "../../components/ui/Input.jsx";
import Button from "../../components/ui/Button.jsx";
import customers from "../../services/customers.service.js";

export default function Customers() {
  const [rows, setRows] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });

  async function load() {
    const r = await customers.list();
    setRows(r.data);
  }
  useEffect(() => {
    load();
  }, []);

  async function create(e) {
    e.preventDefault();
    await customers.create(form);
    setForm({ name: "", email: "" });
    load();
  }
  async function remove(id) {
    await customers.remove(id);
    load();
  }

  return (
    <div className="grid gap-4">
      <form
        onSubmit={create}
        className="grid gap-3 p-4 bg-white rounded md:grid-cols-3"
      >
        <Input
          label="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <Input
          label="Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <Button type="submit" className="self-end">
          Add
        </Button>
      </form>

      <div className="bg-white rounded shadow">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-3 py-2 text-left">Name</th>
              <th className="px-3 py-2 text-left">Email</th>
              <th className="px-3 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((u) => (
              <tr key={u._id} className="border-t">
                <td className="px-3 py-2">{u.name}</td>
                <td className="px-3 py-2">{u.email}</td>
                <td className="px-3 py-2 text-center">
                  <Button onClick={() => remove(u._id)} className="bg-red-600">
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
            {!rows.length && (
              <tr>
                <td colSpan="3" className="px-3 py-4 text-center text-gray-500">
                  No customers
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
