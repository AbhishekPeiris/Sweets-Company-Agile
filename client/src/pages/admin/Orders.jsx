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
    <div className="grid gap-3">
      {rows.map((o) => (
        <div key={o._id} className="p-4 bg-white rounded shadow">
          <div className="font-medium">
            Order #{o._id.slice(-6)} — {o.status}
          </div>
          <ul className="mt-2 ml-5 text-sm list-disc">
            {o.items.map((it, i) => (
              <li key={i}>
                {it.name} x {it.qty} (LKR {it.priceAtOrder})
              </li>
            ))}
          </ul>
          <div className="mt-2 font-semibold">Total: LKR {o.total}</div>
          <div className="flex gap-2 mt-3">
            <Button onClick={() => setStatus(o._id, "processing")}>
              Processing
            </Button>
            <Button onClick={() => setStatus(o._id, "dispatched")}>
              Dispatched
            </Button>
            <Button onClick={() => setStatus(o._id, "delivered")}>
              Delivered
            </Button>
            <Button onClick={() => cancel(o._id)} className="bg-red-600">
              Cancel
            </Button>
          </div>
        </div>
      ))}
      {!rows.length && (
        <div className="p-4 bg-white rounded">No orders yet.</div>
      )}
    </div>
  );
}
