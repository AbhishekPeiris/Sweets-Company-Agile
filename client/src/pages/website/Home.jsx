import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen px-4 py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <section className="grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-dark-base">
              Fresh & Sweet, Everyday
            </h1>
            <p className="text-lg text-dark-base/70">
              Order your favorite sweets online. Fast, simple, and delicious.
            </p>
            <Link
              to="/catalog"
              className="inline-block px-6 py-3 font-medium text-white transition-colors duration-200 rounded-md bg-dark-base hover:bg-secondary-accent"
            >
              Browse Catalog
            </Link>
          </div>
          <div className="p-6 border rounded-lg shadow-lg bg-light-base border-primary-accent/20">
            <img
              src="https://images.unsplash.com/photo-1505252585461-04db1eb84625?q=80&w=1200&auto=format&fit=crop"
              alt="sweets"
              className="w-full rounded-lg"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
