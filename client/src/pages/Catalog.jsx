
import { useEffect, useState } from "react";
import api from "../services/apiClient";

export default function Catalog() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        api.get("/products").then(res => setItems(res.data.data || res.data));
    }, []);

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Catalog</h2>
            <div className="grid md:grid-cols-3 gap-4">
                {items.map(p => (
                    <div key={p._id} className="bg-white rounded shadow p-4">
                        <div className="font-medium">{p.name}</div>
                        <div className="text-sm text-gray-600">{p.category}</div>
                        <div className="mt-2 font-semibold">LKR {p.price}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
