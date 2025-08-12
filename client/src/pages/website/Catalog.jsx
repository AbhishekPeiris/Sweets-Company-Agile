import { useEffect, useState } from "react";
import api from "../../services/apiClient";
import { useCart } from "../../context/CartContext.jsx";

export default function Catalog() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart } = useCart();

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

  const handleAddToCart = (product, event) => {
    addToCart(product, 1);
    // Show success feedback
    const button = event.target;
    const originalText = button.innerHTML;
    button.innerHTML = "✅ Added!";
    button.disabled = true;

    setTimeout(() => {
      button.innerHTML = originalText;
      button.disabled = false;
    }, 2000);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-sweet">
      {/* Floating Decorations */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute w-24 h-24 rounded-full top-20 left-16 bg-rose/30 animate-float blur-xl"></div>
        <div className="absolute w-32 h-32 rounded-full top-40 right-20 bg-lavender/40 animate-bounce-gentle blur-2xl"></div>
        <div className="absolute w-20 h-20 rounded-full bottom-32 left-1/4 bg-tertiary-accent/50 animate-pulse-slow blur-xl"></div>
        <div className="absolute w-16 h-16 rounded-full top-2/3 right-16 bg-primary-accent/40 animate-wiggle blur-lg"></div>
      </div>

      {/* Hero Section */}
      <div className="relative px-6 py-20">
        <div className="mx-auto text-center max-w-7xl">
          <div className="inline-flex items-center px-8 py-4 mb-8 border rounded-full shadow-2xl bg-white/20 backdrop-blur-xl border-white/30 animate-glow">
            <span className="text-xl font-elegant text-dark-base">
              🛍️ Sweet Collection 🛍️
            </span>
          </div>
          <h1 className="mb-8 font-black text-transparent font-fancy text-8xl bg-clip-text bg-gradient-to-r from-secondary-accent via-primary-accent to-rose animate-float">
            Our Magical
            <span className="block text-6xl font-elegant text-tertiary-accent animate-bounce-gentle">
              Sweet Catalog ✨
            </span>
          </h1>
          <p className="max-w-4xl mx-auto text-2xl font-medium leading-relaxed font-modern text-dark-base/80">
            Discover our enchanted collection of handcrafted sweets! Each treat is
            made with love and sprinkled with magic! 🌈🍭
          </p>
        </div>
      </div>

      {/* Filters Section */}
      <div className="relative px-6 py-12 bg-white/20 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-auto lg:mx-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="🔍 Search for your favorite sweets..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 pl-12 transition-all duration-300 border-2 font-modern text-dark-base bg-white/80 backdrop-blur-xl border-primary-accent/30 rounded-2xl focus:border-primary-accent focus:outline-none focus:ring-4 focus:ring-primary-accent/20"
                />
                <div className="absolute text-2xl transform -translate-y-1/2 left-4 top-1/2">
                  🔍
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 lg:justify-end">
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
        <div className="mx-auto max-w-7xl">
          {filteredItems.length > 0 ? (
            <>
              <div className="mb-8 text-center">
                <p className="text-xl font-modern text-dark-base/80">
                  ✨ Found {filteredItems.length} magical treats for you! ✨
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {filteredItems.map((product) => (
                  <div
                    key={product._id}
                    className="relative group animate-float hover:animate-bounce-gentle"
                  >
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary-accent/40 to-secondary-accent/40 rounded-[2rem] blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative p-8 text-center rounded-[2rem] bg-white/80 backdrop-blur-xl border-2 border-white/50 shadow-xl transform group-hover:scale-105 group-hover:-rotate-1 transition-all duration-700">
                      {/* Product Image Placeholder */}
                      <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 text-4xl rounded-full bg-gradient-to-br from-tertiary-accent/30 to-light-base/30 animate-bounce-gentle group-hover:animate-wiggle">
                        🍬
                      </div>

                      {/* Product Name */}
                      <h3 className="mb-2 text-xl font-bold transition-colors duration-300 font-fancy text-dark-base group-hover:text-primary-accent">
                        {product.name}
                      </h3>

                      {/* Category */}
                      <div className="inline-block px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-secondary-accent/20 to-lavender/20">
                        <span className="text-sm font-stylish text-dark-base/80">
                          🎭 {product.category}
                        </span>
                      </div>

                      {/* Price */}
                      <div className="mb-6 text-2xl font-bold text-transparent font-modern bg-clip-text bg-gradient-to-r from-rose to-primary-accent">
                        LKR {product.price}
                      </div>

                      {/* Action Button */}
                      <button
                        onClick={(e) => handleAddToCart(product, e)}
                        className="w-full px-6 py-3 font-semibold text-white transition-all duration-300 transform shadow-lg font-stylish bg-gradient-to-r from-primary-accent to-secondary-accent rounded-2xl hover:shadow-xl hover:scale-105 animate-glow"
                      >
                        ✨ Add to Cart ✨
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="py-20 text-center">
              <div className="mb-6 text-8xl animate-bounce-gentle">😔</div>
              <h3 className="mb-4 text-4xl font-bold font-fancy text-dark-base">
                No Sweet Treats Found
              </h3>
              <p className="mb-8 text-xl font-modern text-dark-base/70">
                Try adjusting your search or filter to find the perfect sweet!
                🔍✨
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("All");
                }}
                className="px-8 py-4 font-semibold text-white transition-all duration-300 transform shadow-xl font-stylish bg-gradient-to-r from-primary-accent to-secondary-accent rounded-2xl hover:shadow-2xl hover:scale-105"
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
            <div className="inline-flex items-center px-8 py-4 mb-8 border rounded-full bg-white/20 border-white/30">
              <span className="text-xl text-white font-elegant">
                🎪 Can't Find What You Want? 🎪
              </span>
            </div>
            <h2 className="mb-8 text-6xl font-black text-white font-fancy">
              Custom Sweet
              <span className="block text-5xl font-elegant text-tertiary-accent animate-bounce-gentle">
                Dreams! ✨
              </span>
            </h2>
            <p className="mb-12 text-2xl font-medium leading-relaxed font-modern text-white/90">
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
                  <span className="transition-transform duration-700 group-hover:rotate-180">
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
