import { useEffect, useState } from "react";
import api from "../../services/apiClient";

export default function Catalog() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    api.get("/products").then((r) => setItems(r.data.data || r.data));
  }, []);

  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold">Catalog</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {items.map((p) => (
          <div key={p._id} className="p-4 bg-white rounded shadow">
            <div className="font-medium">{p.name}</div>
            <div className="text-sm text-gray-600">{p.category}</div>
            <div className="mt-2 font-semibold">LKR {p.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
