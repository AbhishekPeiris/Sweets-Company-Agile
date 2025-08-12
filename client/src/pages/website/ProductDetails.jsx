import { useState } from "react";

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState("Regular");

  // Mock product data - in real app, this would come from route params/API
  const product = {
    name: "Rainbow Dream Cupcakes",
    price: 250,
    category: "Cupcakes",
    description: "Experience pure magic with our signature Rainbow Dream Cupcakes! Each bite is a journey through layers of fluffy vanilla sponge, filled with surprise rainbow cream, and topped with our mystical cloud frosting that changes colors as you eat!",
    ingredients: ["Organic flour", "Rainbow essence", "Vanilla beans", "Magical sprinkles", "Cloud cream", "Fairy dust"],
    variants: ["Regular", "Mini", "Jumbo", "Gluten-Free"],
    nutritionalInfo: {
      calories: 320,
      sugar: "18g",
      fat: "12g",
      protein: "4g"
    },
    reviews: [
      { name: "Luna Star ⭐", rating: 5, comment: "OMG! These are literally magical! The colors actually change as you eat them! 🌈✨" },
      { name: "Sweet Tooth Sam 🍭", rating: 5, comment: "Best cupcakes EVER! My kids were amazed and so was I! Will order again! 🧁💖" },
      { name: "Baker's Daughter 👑", rating: 5, comment: "As someone who bakes, I can appreciate the artistry here. Simply phenomenal! 🎂✨" }
    ]
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-magic">
      {/* Floating Decorations */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute w-20 h-20 rounded-full top-24 left-16 bg-rose/30 animate-float blur-xl"></div>
        <div className="absolute w-32 h-32 rounded-full top-40 right-20 bg-lavender/40 animate-bounce-gentle blur-2xl"></div>
        <div className="absolute w-24 h-24 rounded-full bottom-32 left-1/4 bg-tertiary-accent/50 animate-pulse-slow blur-xl"></div>
      </div>

      {/* Product Hero Section */}
      <div className="relative px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Product Image */}
            <div className="relative animate-float">
              <div className="absolute -inset-6 bg-gradient-to-r from-primary-accent/40 to-secondary-accent/40 rounded-[3rem] blur-2xl"></div>
              <div className="relative p-12 bg-white/20 backdrop-blur-xl rounded-[3rem] border-4 border-white/30 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-700">
                <div className="w-full h-80 bg-gradient-to-br from-tertiary-accent/30 to-light-base/30 rounded-[2rem] flex items-center justify-center text-8xl animate-bounce-gentle">
                  🧁
                </div>
                <div className="absolute px-6 py-3 text-lg font-bold text-white border-4 shadow-xl -bottom-4 -right-4 bg-gradient-to-r from-rose to-primary-accent font-elegant rounded-2xl border-white/50 animate-wiggle">
                  ✨ Limited Edition ✨
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8 animate-bounce-gentle">
              <div className="inline-flex items-center px-6 py-3 border rounded-full bg-gradient-to-r from-secondary-accent/20 to-lavender/20 border-secondary-accent/30">
                <span className="text-lg font-stylish text-dark-base">🎭 {product.category}</span>
              </div>

              <h1 className="text-6xl font-black text-transparent font-fancy bg-clip-text bg-gradient-to-r from-secondary-accent via-primary-accent to-rose">
                {product.name}
              </h1>

              <p className="text-xl leading-relaxed font-modern text-dark-base/80">
                {product.description}
              </p>

              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose to-primary-accent">
                LKR {product.price}
              </div>

              {/* Variants */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-stylish text-dark-base">🎨 Choose Your Magic:</h3>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-6 py-3 font-modern font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 ${selectedVariant === variant
                          ? "bg-gradient-to-r from-primary-accent to-secondary-accent text-white shadow-xl animate-glow"
                          : "bg-white/70 backdrop-blur-sm text-dark-base hover:bg-gradient-to-r hover:from-rose/20 hover:to-lavender/20 border-2 border-primary-accent/30"
                        }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-stylish text-dark-base">📦 Quantity:</h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="flex items-center justify-center w-12 h-12 text-2xl font-bold transition-all duration-300 transform rounded-full bg-gradient-to-r from-secondary-accent/20 to-lavender/20 text-dark-base hover:from-secondary-accent/40 hover:to-lavender/40 hover:scale-110"
                  >
                    −
                  </button>
                  <span className="px-6 py-2 text-2xl font-bold border-2 font-modern text-dark-base bg-white/70 rounded-2xl border-primary-accent/30">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="flex items-center justify-center w-12 h-12 text-2xl font-bold transition-all duration-300 transform rounded-full bg-gradient-to-r from-primary-accent/20 to-rose/20 text-dark-base hover:from-primary-accent/40 hover:to-rose/40 hover:scale-110"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full px-8 py-6 text-2xl font-bold text-white transition-all duration-500 transform shadow-2xl font-fancy bg-gradient-to-r from-primary-accent to-secondary-accent rounded-2xl hover:shadow-primary-accent/50 hover:scale-105 animate-glow">
                ✨ Add {quantity} to Cart - LKR {product.price * quantity} ✨
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="relative px-6 py-20 bg-white/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-3">

            {/* Ingredients */}
            <div className="p-8 rounded-[2rem] bg-white/40 backdrop-blur-xl border-2 border-white/50 shadow-xl">
              <h3 className="mb-6 text-3xl font-bold text-center font-fancy text-dark-base">
                🌟 Magical Ingredients
              </h3>
              <ul className="space-y-3">
                {product.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center gap-3 font-modern text-dark-base/80">
                    <span className="text-xl">✨</span>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            {/* Nutritional Info */}
            <div className="p-8 rounded-[2rem] bg-white/40 backdrop-blur-xl border-2 border-white/50 shadow-xl">
              <h3 className="mb-6 text-3xl font-bold text-center font-fancy text-dark-base">
                🍃 Nutritional Magic
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between font-modern">
                  <span className="font-semibold text-dark-base">Calories</span>
                  <span className="text-dark-base/70">{product.nutritionalInfo.calories}</span>
                </div>
                <div className="flex items-center justify-between font-modern">
                  <span className="font-semibold text-dark-base">Sugar</span>
                  <span className="text-dark-base/70">{product.nutritionalInfo.sugar}</span>
                </div>
                <div className="flex items-center justify-between font-modern">
                  <span className="font-semibold text-dark-base">Fat</span>
                  <span className="text-dark-base/70">{product.nutritionalInfo.fat}</span>
                </div>
                <div className="flex items-center justify-between font-modern">
                  <span className="font-semibold text-dark-base">Protein</span>
                  <span className="text-dark-base/70">{product.nutritionalInfo.protein}</span>
                </div>
              </div>
            </div>

            {/* Special Features */}
            <div className="p-8 rounded-[2rem] bg-white/40 backdrop-blur-xl border-2 border-white/50 shadow-xl">
              <h3 className="mb-6 text-3xl font-bold text-center font-fancy text-dark-base">
                ✨ Special Powers
              </h3>
              <div className="space-y-4">
                <div className="p-3 text-center bg-gradient-to-r from-primary-accent/10 to-rose/10 rounded-xl">
                  <span className="text-lg font-elegant text-dark-base">🌈 Color Changing Magic</span>
                </div>
                <div className="p-3 text-center bg-gradient-to-r from-secondary-accent/10 to-lavender/10 rounded-xl">
                  <span className="text-lg font-elegant text-dark-base">🧚‍♀️ Mood Enhancing</span>
                </div>
                <div className="p-3 text-center bg-gradient-to-r from-tertiary-accent/10 to-light-base/10 rounded-xl">
                  <span className="text-lg font-elegant text-dark-base">⭐ Instagram Worthy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="relative px-6 py-20 bg-gradient-to-br from-cream/50 to-tertiary-accent/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center px-8 py-4 mb-8 border rounded-full shadow-xl bg-gradient-to-r from-primary-accent/20 to-rose/20 border-primary-accent/30">
              <span className="text-xl font-stylish text-dark-base">💕 Sweet Reviews 💕</span>
            </div>
            <h2 className="mb-6 text-6xl font-black text-transparent font-fancy bg-clip-text bg-gradient-to-r from-secondary-accent to-primary-accent">
              What Our Magical Customers Say
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {product.reviews.map((review, index) => (
              <div key={index} className="p-8 rounded-[2rem] bg-white/40 backdrop-blur-xl border-2 border-white/50 shadow-xl transform hover:scale-105 transition-all duration-500">
                <div className="mb-4 text-3xl text-center">
                  {"⭐".repeat(review.rating)}
                </div>
                <p className="mb-4 italic leading-relaxed font-modern text-dark-base/80">
                  "{review.comment}"
                </p>
                <div className="text-lg text-center font-elegant text-secondary-accent">
                  {review.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products CTA */}
      <div className="relative px-6 py-20 bg-gradient-to-r from-primary-accent via-rose to-secondary-accent">
        <div className="max-w-5xl mx-auto text-center">
          <div className="p-16 rounded-[3rem] backdrop-blur-2xl bg-white/10 border-4 border-white/20 shadow-2xl">
            <h2 className="mb-8 text-6xl font-black text-white font-fancy">
              Love This Sweet?
              <span className="block text-5xl font-elegant text-tertiary-accent animate-bounce-gentle">
                Explore More Magic! ✨
              </span>
            </h2>
            <div className="flex flex-col gap-6 sm:flex-row sm:justify-center">
              <a
                href="/catalog"
                className="group px-12 py-6 font-fancy font-black text-2xl bg-white text-secondary-accent rounded-[2rem] shadow-2xl hover:shadow-white/50 transform hover:scale-110 transition-all duration-500"
              >
                <span className="flex items-center justify-center gap-4">
                  🛍️ See More Sweets
                  <span className="transition-transform duration-700 group-hover:rotate-180">✨</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
