import { useEffect, useState } from "react";
import api from "../../services/apiClient";

export default function Catalog() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    api.get("/products").then((r) => {
      const products = r.data.data || r.data;
      setItems(products);
      setFilteredItems(products);
    });
  }, []);

  // Get unique categories
  const categories = ["All", ...new Set(items.map((item) => item.category))];

  // Filter products based on category and search term
  useEffect(() => {
    let filtered = items;

    if (activeCategory !== "All") {
      filtered = filtered.filter((item) => item.category === activeCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredItems(filtered);
  }, [items, activeCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-sweet overflow-hidden">
      {/* Floating Decorations */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-16 w-24 h-24 bg-rose/30 rounded-full animate-float blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-lavender/40 rounded-full animate-bounce-gentle blur-2xl"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-tertiary-accent/50 rounded-full animate-pulse-slow blur-xl"></div>
        <div className="absolute top-2/3 right-16 w-16 h-16 bg-primary-accent/40 rounded-full animate-wiggle blur-lg"></div>
      </div>

      {/* Hero Section */}
      <div className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-8 py-4 mb-8 bg-white/20 backdrop-blur-xl rounded-full border border-white/30 shadow-2xl animate-glow">
            <span className="text-xl font-elegant text-dark-base">
              🛍️ Sweet Collection 🛍️
            </span>
          </div>
          <h1 className="mb-8 font-fancy text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary-accent via-primary-accent to-rose animate-float">
            Our Magical
            <span className="block font-elegant text-6xl text-tertiary-accent animate-bounce-gentle">
              Sweet Catalog ✨
            </span>
          </h1>
          <p className="text-2xl font-modern font-medium text-dark-base/80 max-w-4xl mx-auto leading-relaxed">
            Discover our enchanted collection of handcrafted sweets! Each treat is
            made with love and sprinkled with magic! 🌈🍭
          </p>
        </div>
      </div>

      {/* Filters Section */}
      <div className="relative px-6 py-12 bg-white/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-auto lg:mx-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="🔍 Search for your favorite sweets..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 pl-12 font-modern text-dark-base bg-white/80 backdrop-blur-xl border-2 border-primary-accent/30 rounded-2xl focus:border-primary-accent focus:outline-none focus:ring-4 focus:ring-primary-accent/20 transition-all duration-300"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl">
                  🔍
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 font-stylish font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 ${activeCategory === category
                      ? "bg-gradient-to-r from-primary-accent to-secondary-accent text-white shadow-xl animate-glow"
                      : "bg-white/70 backdrop-blur-sm text-dark-base hover:bg-gradient-to-r hover:from-rose/20 hover:to-lavender/20 border-2 border-primary-accent/30"
                    }`}
                >
                  {category === "All" ? "🌟 All Sweets" : `🍬 ${category}`}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {filteredItems.length > 0 ? (
            <>
              <div className="mb-8 text-center">
                <p className="font-modern text-xl text-dark-base/80">
                  ✨ Found {filteredItems.length} magical treats for you! ✨
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {filteredItems.map((product) => (
                  <div
                    key={product._id}
                    className="group relative animate-float hover:animate-bounce-gentle"
                  >
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary-accent/40 to-secondary-accent/40 rounded-[2rem] blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative p-8 text-center rounded-[2rem] bg-white/80 backdrop-blur-xl border-2 border-white/50 shadow-xl transform group-hover:scale-105 group-hover:-rotate-1 transition-all duration-700">
                      {/* Product Image Placeholder */}
                      <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-tertiary-accent/30 to-light-base/30 rounded-full flex items-center justify-center text-4xl animate-bounce-gentle group-hover:animate-wiggle">
                        🍬
                      </div>

                      {/* Product Name */}
                      <h3 className="mb-2 font-fancy text-xl font-bold text-dark-base group-hover:text-primary-accent transition-colors duration-300">
                        {product.name}
                      </h3>

                      {/* Category */}
                      <div className="mb-4 inline-block px-4 py-2 bg-gradient-to-r from-secondary-accent/20 to-lavender/20 rounded-full">
                        <span className="font-stylish text-sm text-dark-base/80">
                          🎭 {product.category}
                        </span>
                      </div>

                      {/* Price */}
                      <div className="mb-6 font-modern text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose to-primary-accent">
                        LKR {product.price}
                      </div>

                      {/* Action Button */}
                      <button className="w-full px-6 py-3 font-stylish font-semibold text-white bg-gradient-to-r from-primary-accent to-secondary-accent rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-glow">
                        ✨ Add to Cart ✨
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="text-8xl mb-6 animate-bounce-gentle">😔</div>
              <h3 className="font-fancy text-4xl font-bold text-dark-base mb-4">
                No Sweet Treats Found
              </h3>
              <p className="font-modern text-xl text-dark-base/70 mb-8">
                Try adjusting your search or filter to find the perfect sweet!
                🔍✨
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("All");
                }}
                className="px-8 py-4 font-stylish font-semibold text-white bg-gradient-to-r from-primary-accent to-secondary-accent rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                🌟 Show All Sweets 🌟
              </button>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative px-6 py-20 bg-gradient-to-r from-primary-accent via-rose to-secondary-accent">
        <div className="max-w-5xl mx-auto text-center">
          <div className="p-16 rounded-[3rem] backdrop-blur-2xl bg-white/10 border-4 border-white/20 shadow-2xl">
            <div className="mb-8 inline-flex items-center px-8 py-4 bg-white/20 rounded-full border border-white/30">
              <span className="text-xl font-elegant text-white">
                🎪 Can't Find What You Want? 🎪
              </span>
            </div>
            <h2 className="mb-8 font-fancy text-6xl font-black text-white">
              Custom Sweet
              <span className="block font-elegant text-5xl text-tertiary-accent animate-bounce-gentle">
                Dreams! ✨
              </span>
            </h2>
            <p className="mb-12 text-2xl font-modern font-medium text-white/90 leading-relaxed">
              Let us create something special just for you! Our magical
              confectioners love bringing unique sweet visions to life! 🌈💖
            </p>
            <div className="flex flex-col gap-6 sm:flex-row sm:justify-center">
              <a
                href="/contact"
                className="group px-12 py-6 font-fancy font-black text-2xl bg-white text-secondary-accent rounded-[2rem] shadow-2xl hover:shadow-white/50 transform hover:scale-110 transition-all duration-500"
              >
                <span className="flex items-center justify-center gap-4">
                  💌 Custom Order
                  <span className="group-hover:rotate-180 transition-transform duration-700">
                    ✨
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
