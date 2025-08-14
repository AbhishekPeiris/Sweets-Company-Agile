import { useEffect, useState } from "react";
import Button from "../../components/ui/Button.jsx";
import orders from "../../services/orders.service.js";

export default function Orders() {
  const [rows, setRows] = useState([]);
  async function load() {
    const r = await orders.list();
    setRows(r.data);
  }
  useEffect(() => {
    load();
  }, []);

  async function setStatus(id, status) {
    await orders.updateStatus(id, status);
    load();
  }
  async function cancel(id) {
    await orders.remove(id);
    load();
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-black text-transparent font-fancy bg-clip-text bg-gradient-to-r from-secondary-accent to-primary-accent">
          📋 Orders Management ✨
        </h1>
        <p className="text-lg font-modern text-dark-base/70">Track and manage your sweet orders with care! 💖</p>
      </div>

      {/* Orders List */}
      <div className="space-y-6">
        {rows.map((o) => (
          <div key={o._id} className="p-8 border-2 rounded-3xl shadow-2xl bg-white/80 backdrop-blur-xl border-primary-accent/30 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] animate-glow">
            <div className="flex items-center justify-between mb-4">
              <div className="text-2xl font-bold font-fancy text-dark-base">
                🛍️ Order #{o._id.slice(-6)}
              </div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-secondary-accent/20 to-primary-accent/20">
                <span className="mr-2 text-2xl">⭐</span>
                <span className="font-bold font-stylish text-secondary-accent">{o.status}</span>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="mb-3 font-semibold font-stylish text-dark-base">🍬 Order Items:</h4>
              <ul className="space-y-2">
                {o.items.map((it, i) => (
                  <li key={i} className="flex items-center justify-between p-3 bg-gradient-to-r from-cream/30 to-light-base/20 rounded-xl">
                    <span className="font-modern text-dark-base">
                      <span className="font-semibold">{it.name}</span> x {it.qty}
                    </span>
                    <span className="font-bold text-transparent font-stylish bg-clip-text bg-gradient-to-r from-rose to-primary-accent">
                      LKR {it.priceAtOrder * it.qty}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between p-4 mb-6 bg-gradient-to-r from-tertiary-accent/20 to-light-base/20 rounded-xl">
              <span className="text-xl font-bold font-fancy text-dark-base">💰 Total Amount:</span>
              <span className="text-2xl font-black text-transparent font-fancy bg-clip-text bg-gradient-to-r from-secondary-accent to-primary-accent">
                LKR {o.total}
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => setStatus(o._id, "processing")}
                className="transform bg-blue-500 hover:bg-blue-600 hover:scale-105"
              >
                ⏳ Processing
              </Button>
              <Button
                onClick={() => setStatus(o._id, "dispatched")}
                className="transform bg-orange-500 hover:bg-orange-600 hover:scale-105"
              >
                🚚 Dispatched
              </Button>
              <Button
                onClick={() => setStatus(o._id, "delivered")}
                className="transform bg-green-500 hover:bg-green-600 hover:scale-105"
              >
                ✅ Delivered
              </Button>
              <Button
                onClick={() => cancel(o._id)}
                className="transform bg-red-500 hover:bg-red-600 hover:scale-105"
              >
                ❌ Cancel
              </Button>
            </div>
          </div>
        ))}

        {!rows.length && (
          <div className="p-12 text-center border-2 rounded-3xl bg-white/80 backdrop-blur-xl border-primary-accent/30">
            <div className="flex flex-col items-center gap-4">
              <span className="text-8xl animate-bounce-gentle">📋</span>
              <span className="text-2xl font-bold text-transparent font-fancy bg-clip-text bg-gradient-to-r from-secondary-accent to-primary-accent">
                No Orders Yet
              </span>
              <span className="text-lg font-modern text-dark-base/70">
                Sweet orders will appear here! ✨
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
