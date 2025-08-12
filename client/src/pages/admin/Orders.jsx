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
    await orders.cancel(id);
    load();
  }

  return (
    <div className="space-y-4">
      {rows.map((o) => (
        <div key={o._id} className="p-6 border rounded-lg shadow-lg bg-light-base border-primary-accent/20">
          <div className="font-semibold text-dark-base">
            Order #{o._id.slice(-6)} — <span className="text-secondary-accent">{o.status}</span>
          </div>
          <ul className="mt-3 ml-5 text-sm list-disc text-dark-base/80">
            {o.items.map((it, i) => (
              <li key={i}>
                {it.name} x {it.qty} (LKR {it.priceAtOrder})
              </li>
            ))}
          </ul>
          <div className="mt-3 text-lg font-semibold text-dark-base">Total: LKR {o.total}</div>
          <div className="flex flex-wrap gap-2 mt-4">
            <Button onClick={() => setStatus(o._id, "processing")}>
              Processing
            </Button>
            <Button onClick={() => setStatus(o._id, "dispatched")} className="bg-secondary-accent hover:bg-secondary-accent/80">
              Dispatched
            </Button>
            <Button onClick={() => setStatus(o._id, "delivered")} className="bg-green-600 hover:bg-green-700">
              Delivered
            </Button>
            <Button onClick={() => cancel(o._id)} className="bg-red-600 hover:bg-red-700">
              Cancel
            </Button>
          </div>
        </div>
      ))}
      {!rows.length && (
        <div className="p-6 text-center border rounded-lg bg-light-base border-primary-accent/20">
          <div className="text-dark-base/70">No orders found</div>
        </div>
      )}
    </div>
  );
}
