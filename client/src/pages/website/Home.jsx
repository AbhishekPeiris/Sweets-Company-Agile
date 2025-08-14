import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-sweet">
      {/* Floating Decorations */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute w-20 h-20 rounded-full top-20 left-10 bg-rose/30 animate-float blur-xl"></div>
        <div className="absolute w-32 h-32 rounded-full top-40 right-20 bg-lavender/40 animate-bounce-gentle blur-2xl"></div>
        <div className="absolute w-24 h-24 rounded-full bottom-32 left-1/4 bg-tertiary-accent/50 animate-pulse-slow blur-xl"></div>
        <div className="absolute w-16 h-16 rounded-full top-1/2 right-10 bg-primary-accent/40 animate-wiggle blur-lg"></div>
      </div>

      {/* Hero Section */}
      <div className="relative flex items-center min-h-screen px-6 py-24">
        <div className="w-full mx-auto max-w-8xl">
          <section className="grid items-center gap-20 lg:grid-cols-2">
            <div className="space-y-12 animate-float">
              <div className="-mt-20 space-y-8">
                <div className="inline-flex items-center px-6 py-3 border rounded-full shadow-xl bg-white/20 backdrop-blur-lg border-white/30">
                  <span className="text-lg font-stylish text-dark-base animate-pulse">
                    ✨ Magical Sweet Experience ✨
                  </span>
                </div>

                <h1 className="font-black leading-none font-fancy text-8xl lg:text-9xl">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose via-primary-accent to-lavender animate-glow">
                    Sweet
                  </span>
                  <span className="block font-elegant text-7xl lg:text-8xl text-secondary-accent animate-bounce-gentle">
                    Dreams
                  </span><br />
                  <span className="block mt-4 text-4xl font-modern lg:text-5xl text-dark-base/80">
                    Come True ✨
                  </span>
                </h1>

                <p className="max-w-2xl text-2xl font-medium leading-relaxed lg:text-3xl text-dark-base/90 font-modern">
                  🌈 Step into our magical world of handcrafted sweets where
                  every bite is a celebration! From rainbow delights to golden
                  treasures, we create sweet memories that last forever. 🎂
                </p>
              </div>

              <div className="flex flex-col gap-8 sm:flex-row">
                <Link
                  to="/catalog"
                  className="relative inline-flex items-center justify-center px-12 py-6 text-2xl font-bold text-white transition-all duration-500 transform shadow-2xl group font-fancy rounded-3xl bg-gradient-to-r from-rose via-primary-accent to-lavender hover:shadow-rose/50 hover:scale-110 animate-glow"
                >
                  <span className="relative z-10 flex items-center gap-4">
                    🛍️ Explore Magic
                    <span className="transition-transform duration-300 group-hover:rotate-12">
                      ✨
                    </span>
                  </span>
                  <div className="absolute inset-0 transition-opacity duration-500 opacity-0 rounded-3xl bg-gradient-to-r from-lavender via-tertiary-accent to-rose group-hover:opacity-100"></div>
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-12 py-6 text-2xl font-bold transition-all duration-500 transform border-4 shadow-xl group font-stylish rounded-3xl text-dark-base border-dark-base/30 bg-white/30 backdrop-blur-lg hover:border-rose hover:bg-rose hover:text-white hover:scale-110"
                >
                  <span className="flex items-center gap-3">
                    🎭 Our Story
                    <span className="group-hover:animate-wiggle">💫</span>
                  </span>
                </Link>
              </div>
            </div>

            <div className="relative animate-float">
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-r from-rose/60 via-primary-accent/60 to-lavender/60 rounded-[3rem] blur-3xl animate-pulse-slow"></div>
                <div className="relative transition-transform duration-700 transform rotate-3 hover:rotate-0">
                  <div className="p-8 rounded-[3rem] bg-white/20 backdrop-blur-xl border-4 border-white/30 shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1505252585461-04db1eb84625?q=80&w=1200&auto=format&fit=crop"
                      alt="Magical sweets collection"
                      className="w-full rounded-[2rem] shadow-2xl hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute px-8 py-4 text-xl font-bold border-4 shadow-xl -top-6 -right-6 bg-gradient-to-r from-tertiary-accent to-rose text-dark-base font-elegant rounded-2xl animate-bounce-gentle border-white/50">
                      ✨ Fresh Daily ✨
                    </div>
                    <div className="absolute px-6 py-3 text-lg font-bold text-white border-4 shadow-xl -bottom-6 -left-6 bg-gradient-to-r from-lavender to-secondary-accent font-stylish rounded-2xl animate-wiggle border-white/50">
                      🎂 Handmade 🎂
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative px-6 py-32 bg-gradient-magic">
        <div className="mx-auto max-w-8xl">
          <div className="mb-20 text-center">
            <div className="inline-flex items-center px-8 py-4 mb-8 border rounded-full shadow-2xl bg-white/20 backdrop-blur-xl border-white/30">
              <span className="text-xl font-stylish text-dark-base">
                🌟 Why We're Special 🌟
              </span>
            </div>
            <h2 className="mb-8 font-black text-transparent font-fancy text-7xl bg-clip-text bg-gradient-to-r from-secondary-accent via-rose to-primary-accent">
              Pure Magic
            </h2>
            <p className="max-w-4xl mx-auto text-3xl font-medium font-modern text-dark-base/80">
              Every sweet tells a story of love, craftsmanship, and pure joy! ✨
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                emoji: "🍯",
                title: "Golden Ingredients",
                desc: "We source the most precious ingredients from around the world, creating flavors that dance on your tongue like fairy dust! ✨🌈",
              },
              {
                emoji: "👨‍🍳",
                title: "Artisan Magic",
                desc: "Our master confectioners weave spells of sweetness, crafting each treat with centuries-old secrets and modern innovation! 🎭✨",
              },
              {
                emoji: "🚀",
                title: "Swift Delivery",
                desc: "Your sweet dreams travel on wings of wonder, arriving fresh and magical at your doorstep faster than you can imagine! 🦋💫",
              },
            ].map((feature, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-rose/40 to-lavender/40 rounded-[2rem] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-12 text-center rounded-[2rem] bg-white/30 backdrop-blur-xl border-2 border-white/40 shadow-2xl transform group-hover:scale-105 group-hover:-rotate-1 transition-all duration-700">
                  <div className="mb-8 text-8xl animate-bounce-gentle group-hover:animate-wiggle">
                    {feature.emoji}
                  </div>
                  <h3 className="mb-6 text-3xl font-bold font-fancy text-dark-base">
                    {feature.title}
                  </h3>
                  <p className="text-lg leading-relaxed font-modern text-dark-base/80">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative px-6 py-32 bg-gradient-to-br from-cream via-white to-tertiary-accent/30">
        <div className="mx-auto max-w-8xl">
          <div className="mb-20 text-center">
            <div className="inline-flex items-center px-8 py-4 mb-8 border rounded-full shadow-2xl bg-gradient-to-r from-rose/20 to-lavender/20 backdrop-blur-xl border-rose/30">
              <span className="text-xl font-elegant text-dark-base">
                💕 Sweet Love Stories 💕
              </span>
            </div>
            <h2 className="mb-8 font-black text-transparent font-fancy text-7xl bg-clip-text bg-gradient-to-r from-primary-accent via-secondary-accent to-rose">
              Happy Hearts
            </h2>
            <p className="text-3xl font-medium font-modern text-dark-base/80">
              Spreading joy, one sweet at a time! 🌈✨
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                text: "OMG! These sweets are like edible rainbows! 🌈 Every bite transported me to candy wonderland. I'm literally obsessed! 😍✨",
                author: "Luna Sparkles 🦄",
                stars: "🌟🌟🌟🌟🌟",
              },
              {
                text: "Perfect for my unicorn birthday party! 🦄 The presentation was so Instagram-worthy and taste was absolutely divine! 💖✨",
                author: "Princess Bella 👑",
                stars: "🌟🌟🌟🌟🌟",
              },
              {
                text: "These magical treats made our family gathering extra special! The kids couldn't stop smiling! Pure happiness in every bite! 🎉💕",
                author: "Mama Joy 🌺",
                stars: "🌟🌟🌟🌟🌟",
              },
            ].map((testimonial, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-r from-primary-accent/30 to-lavender/30 rounded-[2rem] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-10 rounded-[2rem] bg-white/70 backdrop-blur-xl border-2 border-white/60 shadow-xl transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-700">
                  <div className="mb-6 text-4xl text-center">
                    {testimonial.stars}
                  </div>
                  <p className="mb-8 text-lg italic leading-relaxed font-modern text-dark-base/90">
                    "{testimonial.text}"
                  </p>
                  <div className="text-xl font-bold text-center font-elegant text-secondary-accent">
                    {testimonial.author}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative px-6 py-32 overflow-hidden bg-gradient-to-r from-secondary-accent via-primary-accent to-rose">
        <div className="absolute inset-0">
          <div className="absolute w-40 h-40 rounded-full top-20 left-20 bg-white/10 animate-float blur-3xl"></div>
          <div className="absolute rounded-full bottom-20 right-20 w-60 h-60 bg-tertiary-accent/20 animate-bounce-gentle blur-3xl"></div>
          <div className="absolute rounded-full top-1/2 left-1/2 w-80 h-80 bg-white/5 animate-pulse-slow blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="p-16 rounded-[3rem] backdrop-blur-2xl bg-white/10 border-4 border-white/20 shadow-2xl">
            <div className="inline-flex items-center px-8 py-4 mb-8 border rounded-full bg-white/20 border-white/30">
              <span className="text-xl text-white font-elegant">
                🎪 Join the Sweet Adventure 🎪
              </span>
            </div>
            <h2 className="mb-8 font-black text-white font-fancy text-8xl">
              Ready for
              <span className="block text-6xl font-elegant text-tertiary-accent animate-bounce-gentle">
                Sweet Magic?
              </span>
            </h2>
            <p className="max-w-4xl mx-auto mb-12 text-3xl font-medium leading-relaxed font-modern text-white/90">
              Dive into our enchanted collection of handcrafted sweets and let
              the magic begin! ✨🌈
            </p>
            <div className="flex flex-col gap-8 sm:flex-row sm:justify-center">
              <Link
                to="/catalog"
                className="group px-16 py-8 font-fancy font-black text-3xl bg-white text-secondary-accent rounded-[2rem] shadow-2xl hover:shadow-white/50 transform hover:scale-110 transition-all duration-500 animate-glow"
              >
                <span className="flex items-center justify-center gap-4">
                  🛍️ Shop Magic
                  <span className="transition-transform duration-700 group-hover:rotate-180">
                    ✨
                  </span>
                </span>
              </Link>
              <Link
                to="/contact"
                className="group px-16 py-8 font-stylish font-bold text-3xl border-4 border-white text-white rounded-[2rem] hover:bg-white hover:text-secondary-accent transform hover:scale-110 transition-all duration-500"
              >
                <span className="flex items-center justify-center gap-4">
                  💌 Say Hello
                  <span className="group-hover:animate-wiggle">💫</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
