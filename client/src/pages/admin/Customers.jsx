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
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-black text-transparent font-fancy bg-clip-text bg-gradient-to-r from-secondary-accent to-primary-accent">
          👥 Customer Management ✨
        </h1>
        <p className="text-lg font-modern text-dark-base/70">
          Manage your sweet customers with love! 💖
        </p>
      </div>

      {/* Add Customer Form */}
      <form
        onSubmit={create}
        className="grid gap-6 p-8 border-2 shadow-2xl rounded-3xl bg-white/80 backdrop-blur-xl border-primary-accent/30 md:grid-cols-3 animate-glow"
      >
        <Input
          label="✨ Customer Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          placeholder="Enter customer name..."
        />
        <Input
          label="📧 Email Address"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          placeholder="customer@email.com"
        />
        <Button type="submit" className="self-end">
          ✨ Add Customer ✨
        </Button>
      </form>

      {/* Customers Table */}
      <div className="border-2 shadow-2xl rounded-3xl bg-white/80 backdrop-blur-xl border-primary-accent/30 animate-glow">
        <table className="min-w-full text-sm">
          <thead className="border-b-2 bg-gradient-to-r from-primary-accent/20 to-secondary-accent/20 border-primary-accent/30">
            <tr>
              <th className="px-6 py-4 font-bold text-left font-stylish text-dark-base">
                👤 Customer Name
              </th>
              <th className="px-6 py-4 font-bold text-left font-stylish text-dark-base">
                📧 Email Address
              </th>
              <th className="px-6 py-4 font-bold text-center font-stylish text-dark-base">
                ⚡ Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((u, index) => (
              <tr
                key={u._id}
                className={`border-b border-primary-accent/10 hover:bg-gradient-to-r hover:from-primary-accent/10 hover:to-secondary-accent/10 transition-all duration-300 ${index % 2 === 0 ? "bg-white/50" : "bg-cream/30"
                  }`}
              >
                <td className="px-6 py-4 font-semibold font-modern text-dark-base">
                  {u.name}
                </td>
                <td className="px-6 py-4 font-modern text-dark-base">
                  {u.email}
                </td>
                <td className="px-6 py-4 text-center">
                  <Button
                    onClick={() => remove(u._id)}
                    className="transform bg-red-500 hover:bg-red-600 hover:scale-105"
                  >
                    🗑️ Delete
                  </Button>
                </td>
              </tr>
            ))}
            {!rows.length && (
              <tr>
                <td
                  colSpan="3"
                  className="px-6 py-12 text-xl text-center font-elegant text-dark-base/70"
                >
                  <div className="flex flex-col items-center gap-4">
                    <span className="text-6xl animate-bounce-gentle">👥</span>
                    <span>No sweet customers yet... ✨</span>
                    <span className="text-sm">
                      Add your first customer above! 💖
                    </span>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
