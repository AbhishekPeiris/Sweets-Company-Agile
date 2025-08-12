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
    <div className="space-y-6">
      <form
        onSubmit={create}
        className="grid gap-4 p-6 border rounded-lg shadow-lg bg-light-base border-primary-accent/20 md:grid-cols-3"
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
          Add Customer
        </Button>
      </form>

      <div className="border rounded-lg shadow-lg bg-light-base border-primary-accent/20">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b bg-primary-accent/10 border-primary-accent/20">
              <th className="px-4 py-3 font-semibold text-left text-dark-base">
                Name
              </th>
              <th className="px-4 py-3 font-semibold text-left text-dark-base">
                Email
              </th>
              <th className="px-4 py-3 font-semibold text-center text-dark-base">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((u) => (
              <tr key={u._id} className="border-b border-primary-accent/10">
                <td className="px-4 py-3 text-dark-base">{u.name}</td>
                <td className="px-4 py-3 text-dark-base">{u.email}</td>
                <td className="px-4 py-3 text-center">
                  <Button
                    onClick={() => remove(u._id)}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
            {!rows.length && (
              <tr>
                <td colSpan="3" className="px-4 py-6 text-center text-dark-base/70">
                  No customers found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
