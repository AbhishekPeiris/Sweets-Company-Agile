import { useEffect, useState } from "react";
import api from "../../services/apiClient";

export default function Catalog() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    api.get("/products").then((r) => setItems(r.data.data || r.data));
  }, []);

  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center text-dark-base">
          Our Sweet Catalog
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((p) => (
            <div
              key={p._id}
              className="p-6 transition-shadow duration-200 border rounded-lg shadow-lg bg-light-base border-primary-accent/20 hover:shadow-xl"
            >
              <div className="mb-2 text-lg font-semibold text-dark-base">
                {p.name}
              </div>
              <div className="mb-3 text-sm text-dark-base/70">
                {p.category}
              </div>
              <div className="text-xl font-bold text-dark-base">
                LKR {p.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
