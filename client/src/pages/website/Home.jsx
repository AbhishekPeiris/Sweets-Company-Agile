import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="grid items-center gap-6 md:grid-cols-2">
      <div>
        <h1 className="mb-2 text-3xl font-bold">Fresh & Sweet, Everyday</h1>
        <p className="mb-4 text-gray-600">
          Order your favorite sweets online. Fast, simple, and delicious.
        </p>
        <Link
          to="/catalog"
          className="px-4 py-2 text-white bg-gray-800 rounded"
        >
          Browse Catalog
        </Link>
      </div>
      <div className="p-6 bg-white rounded shadow">
        <img
          src="https://images.unsplash.com/photo-1505252585461-04db1eb84625?q=80&w=1200&auto=format&fit=crop"
          alt="sweets"
          className="rounded"
        />
      </div>
    </section>
  );
}
