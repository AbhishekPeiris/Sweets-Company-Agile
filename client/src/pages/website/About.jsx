export default function About() {
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-magic">
      {/* Floating Decorations */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute w-24 h-24 rounded-full top-32 left-16 bg-rose/30 animate-float blur-xl"></div>
        <div className="absolute w-32 h-32 rounded-full top-20 right-20 bg-lavender/40 animate-bounce-gentle blur-2xl"></div>
        <div className="absolute w-20 h-20 rounded-full bottom-40 left-1/3 bg-tertiary-accent/50 animate-pulse-slow blur-xl"></div>
        <div className="absolute w-16 h-16 rounded-full top-2/3 right-16 bg-primary-accent/40 animate-wiggle blur-lg"></div>
      </div>

      {/* Hero Section */}
      <div className="relative px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-8 py-4 mb-8 border rounded-full shadow-2xl bg-white/20 backdrop-blur-xl border-white/30 animate-glow">
            <span className="text-xl font-elegant text-dark-base">
              🎭 Our Sweet Journey 🎭
            </span>
          </div>
          <h1 className="mb-8 font-black text-transparent font-fancy text-8xl bg-clip-text bg-gradient-to-r from-secondary-accent via-primary-accent to-rose animate-float">
            About Our
            <span className="block text-6xl font-elegant text-tertiary-accent animate-bounce-gentle">
              Sweet Empire ✨
            </span>
          </h1>
          <p className="max-w-4xl mx-auto text-2xl font-medium leading-relaxed font-modern text-dark-base/80">
            Welcome to a world where dreams taste sweeter than reality! 🌈✨
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="relative px-6 py-20 bg-white/20 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="space-y-8 animate-float">
              <div className="inline-flex items-center px-6 py-3 border rounded-full bg-gradient-to-r from-rose/20 to-lavender/20 border-rose/30">
                <span className="text-lg font-stylish text-dark-base">
                  📖 Once Upon a Time...
                </span>
              </div>
              <h2 className="text-5xl font-bold font-fancy text-dark-base">
                Our Magical Beginning 🌟
              </h2>
              <div className="space-y-6 text-lg leading-relaxed font-modern text-dark-base/80">
                <p>
                  🏰 In a cozy little kitchen filled with the aroma of vanilla
                  and dreams, our sweet adventure began over 25 years ago. What
                  started as a grandmother's secret recipes shared with
                  neighbors has blossomed into a magical empire of confectionery
                  wonders!
                </p>
                <p>
                  👵✨ Our founder, Grandma Rose, believed that every sweet
                  should tell a story, carry a memory, and spread joy like fairy
                  dust. Her philosophy of "Baking with Love, Serving with
                  Smiles" remains the heart of everything we do today.
                </p>
                <p>
                  🌈 From humble beginnings in a small town bakery to serving
                  sweet dreams across the country, we've never forgotten that
                  behind every smile is a perfect sweet moment waiting to
                  happen!
                </p>
              </div>
            </div>

            <div className="relative animate-bounce-gentle">
              <div className="absolute -inset-6 bg-gradient-to-r from-primary-accent/40 to-secondary-accent/40 rounded-[2rem] blur-2xl"></div>
              <div className="relative p-8 bg-white/30 backdrop-blur-xl rounded-[2rem] border-4 border-white/40 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1200&auto=format&fit=crop"
                  alt="Our sweet kitchen"
                  className="w-full shadow-xl rounded-2xl"
                />
                <div className="absolute px-6 py-3 text-lg font-bold border-4 shadow-xl -bottom-4 -right-4 bg-gradient-to-r from-tertiary-accent to-light-base text-dark-base font-elegant rounded-2xl border-white/50">
                  🏠 Where Magic Happens 🏠
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="relative px-6 py-20 bg-gradient-to-br from-cream/50 to-tertiary-accent/30">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center px-8 py-4 mb-8 border rounded-full shadow-xl bg-gradient-to-r from-lavender/20 to-rose/20 border-lavender/30">
              <span className="text-xl font-stylish text-dark-base">
                💖 Our Heart & Soul 💖
              </span>
            </div>
            <h2 className="mb-6 text-6xl font-black text-transparent font-fancy bg-clip-text bg-gradient-to-r from-rose via-primary-accent to-secondary-accent">
              Mission & Values
            </h2>
            <p className="max-w-4xl mx-auto text-2xl font-medium font-modern text-dark-base/80">
              The principles that guide our sweet journey every single day! 🌟
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                emoji: "💝",
                title: "Spread Pure Joy",
                desc: "Every sweet we create is infused with love, designed to bring smiles, create memories, and turn ordinary moments into celebrations! 🎉✨",
              },
              {
                emoji: "🌿",
                title: "Natural Magic",
                desc: "We believe nature provides the best ingredients! From organic vanilla beans to rainbow sprinkles, everything is carefully selected for maximum happiness! 🌈🍃",
              },
              {
                emoji: "👨‍👩‍👧‍👦",
                title: "Family First",
                desc: "Our customers are our extended family! We treat every order with the same care we'd give to our own loved ones' special moments! 💕👑",
              },
              {
                emoji: "🎨",
                title: "Creative Innovation",
                desc: "Tradition meets innovation in our kitchen! We honor classic recipes while constantly dreaming up new flavors and magical presentations! ✨🎭",
              },
              {
                emoji: "🌍",
                title: "Sweet Community",
                desc: "We're committed to giving back to our community, supporting local farmers, and making the world a sweeter place for everyone! 🤝💚",
              },
              {
                emoji: "🏆",
                title: "Excellence Always",
                desc: "From the first mixing bowl to final delivery, we maintain the highest standards because you deserve nothing but the absolute best! 👑⭐",
              },
            ].map((value, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-rose/30 to-lavender/30 rounded-[2rem] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8 text-center rounded-[2rem] bg-white/40 backdrop-blur-xl border-2 border-white/50 shadow-xl transform group-hover:scale-105 group-hover:-rotate-1 transition-all duration-700">
                  <div className="mb-6 text-6xl animate-bounce-gentle group-hover:animate-wiggle">
                    {value.emoji}
                  </div>
                  <h3 className="mb-4 text-2xl font-bold font-fancy text-dark-base">
                    {value.title}
                  </h3>
                  <p className="leading-relaxed font-modern text-dark-base/80">
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="relative px-6 py-20 bg-gradient-sweet">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center px-8 py-4 mb-8 border rounded-full shadow-xl bg-white/20 backdrop-blur-xl border-white/30">
              <span className="text-xl font-elegant text-dark-base">
                🌟 Meet the Magic Makers 🌟
              </span>
            </div>
            <h2 className="mb-6 text-6xl font-black text-transparent font-fancy bg-clip-text bg-gradient-to-r from-secondary-accent to-primary-accent">
              Our Sweet Team
            </h2>
            <p className="max-w-4xl mx-auto text-2xl font-medium font-modern text-dark-base/80">
              The wonderful people who bring magic to life every day! ✨👥
            </p>
          </div>

          <div className="grid gap-12 text-center md:grid-cols-3">
            {[
              {
                name: "Chef Isabella Rose 🌹",
                role: "Head Confectioner & Dream Weaver",
                desc: "With 20+ years of magical experience, Isabella transforms simple ingredients into edible masterpieces that taste like pure happiness! ✨👩‍🍳",
              },
              {
                name: "Marcus Sweetworth 🍭",
                role: "Innovation Director & Flavor Wizard",
                desc: "Marcus is our mad scientist of sweetness, constantly experimenting with new flavors and creating taste combinations that blow minds! 🧪🌈",
              },
              {
                name: "Luna Sparkles 🌙",
                role: "Customer Happiness Manager",
                desc: "Luna ensures every customer feels like royalty! Her superpower is turning any frown upside down with perfect sweet recommendations! 👑💫",
              },
            ].map((member, index) => (
              <div key={index} className="group">
                <div className="relative p-10 rounded-[2rem] bg-white/30 backdrop-blur-xl border-2 border-white/40 shadow-xl transform group-hover:scale-105 transition-all duration-500">
                  <div className="mb-6 text-6xl animate-bounce-gentle">👤</div>
                  <h3 className="mb-2 text-2xl font-bold font-fancy text-dark-base">
                    {member.name}
                  </h3>
                  <div className="mb-4 text-lg font-elegant text-secondary-accent">
                    {member.role}
                  </div>
                  <p className="leading-relaxed font-modern text-dark-base/80">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative px-6 py-20 bg-gradient-to-r from-primary-accent via-rose to-secondary-accent">
        <div className="max-w-5xl mx-auto text-center">
          <div className="p-16 rounded-[3rem] backdrop-blur-2xl bg-white/10 border-4 border-white/20 shadow-2xl">
            <div className="inline-flex items-center px-8 py-4 mb-8 border rounded-full bg-white/20 border-white/30">
              <span className="text-xl text-white font-elegant">
                🎪 Join Our Sweet Family 🎪
              </span>
            </div>
            <h2 className="mb-8 text-6xl font-black text-white font-fancy">
              Ready to Create
              <span className="block text-5xl font-elegant text-tertiary-accent animate-bounce-gentle">
                Sweet Memories? ✨
              </span>
            </h2>
            <p className="mb-12 text-2xl font-medium leading-relaxed font-modern text-white/90">
              We can't wait to be part of your special moments and help you
              create memories that taste as good as they feel! 💖🌈
            </p>
            <div className="flex flex-col gap-6 sm:flex-row sm:justify-center">
              <a
                href="/catalog"
                className="group px-12 py-6 font-fancy font-black text-2xl bg-white text-secondary-accent rounded-[2rem] shadow-2xl hover:shadow-white/50 transform hover:scale-110 transition-all duration-500"
              >
                <span className="flex items-center justify-center gap-4">
                  🛍️ Explore Our Magic
                  <span className="transition-transform duration-700 group-hover:rotate-180">
                    ✨
                  </span>
                </span>
              </a>
              <a
                href="/contact"
                className="group px-12 py-6 font-stylish font-bold text-2xl border-4 border-white text-white rounded-[2rem] hover:bg-white hover:text-secondary-accent transform hover:scale-110 transition-all duration-500"
              >
                <span className="flex items-center justify-center gap-4">
                  💌 Let's Chat
                  <span className="group-hover:animate-wiggle">💫</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
