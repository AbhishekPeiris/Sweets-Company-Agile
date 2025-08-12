import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("✨ Thank you for your message! We'll get back to you soon! 🍬");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-magic">
      {/* Floating Decorations */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute w-20 h-20 rounded-full top-24 left-16 bg-rose/30 animate-float blur-xl"></div>
        <div className="absolute w-32 h-32 rounded-full top-40 right-20 bg-lavender/40 animate-bounce-gentle blur-2xl"></div>
        <div className="absolute w-24 h-24 rounded-full bottom-32 left-1/4 bg-tertiary-accent/50 animate-pulse-slow blur-xl"></div>
        <div className="absolute w-16 h-16 rounded-full top-2/3 right-16 bg-primary-accent/40 animate-wiggle blur-lg"></div>
      </div>

      {/* Hero Section */}
      <div className="relative px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-8 py-4 mb-8 border rounded-full shadow-2xl bg-white/20 backdrop-blur-xl border-white/30 animate-glow">
            <span className="text-xl font-elegant text-dark-base">
              💌 Let's Connect 💌
            </span>
          </div>
          <h1 className="mb-8 font-black text-transparent font-fancy text-8xl bg-clip-text bg-gradient-to-r from-secondary-accent via-primary-accent to-rose animate-float">
            Contact Our
            <span className="block text-6xl font-elegant text-tertiary-accent animate-bounce-gentle">
              Sweet Team ✨
            </span>
          </h1>
          <p className="max-w-4xl mx-auto text-2xl font-medium leading-relaxed font-modern text-dark-base/80">
            We'd love to hear from you! Whether you have questions, special
            requests, or just want to say hello! 🌈💖
          </p>
        </div>
      </div>

      {/* Contact Form & Info Section */}
      <div className="relative px-6 py-20 bg-white/20 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="animate-float">
              <div className="p-10 rounded-[2rem] bg-white/40 backdrop-blur-xl border-2 border-white/50 shadow-2xl">
                <div className="mb-8 text-center">
                  <h2 className="mb-4 text-4xl font-bold font-fancy text-dark-base">
                    Send Us a Sweet Message 📝
                  </h2>
                  <p className="text-lg font-modern text-dark-base/70">
                    We'll get back to you faster than you can say "cupcake"! 🧁
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block mb-2 font-semibold font-stylish text-dark-base">
                      Your Name ✨
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 transition-all duration-300 border-2 rounded-2xl bg-white/70 border-primary-accent/30 focus:border-primary-accent focus:outline-none focus:ring-4 focus:ring-primary-accent/20 font-modern"
                      placeholder="Your magical name..."
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-semibold font-stylish text-dark-base">
                      Email Address 📧
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 transition-all duration-300 border-2 rounded-2xl bg-white/70 border-primary-accent/30 focus:border-primary-accent focus:outline-none focus:ring-4 focus:ring-primary-accent/20 font-modern"
                      placeholder="your.email@sweetness.com"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-semibold font-stylish text-dark-base">
                      Subject 🎯
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 transition-all duration-300 border-2 rounded-2xl bg-white/70 border-primary-accent/30 focus:border-primary-accent focus:outline-none focus:ring-4 focus:ring-primary-accent/20 font-modern"
                      placeholder="What's on your sweet mind?"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-semibold font-stylish text-dark-base">
                      Your Message 💭
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 transition-all duration-300 border-2 resize-none rounded-2xl bg-white/70 border-primary-accent/30 focus:border-primary-accent focus:outline-none focus:ring-4 focus:ring-primary-accent/20 font-modern"
                      placeholder="Share your sweet thoughts with us..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 text-xl font-bold text-white transition-all duration-300 transform shadow-xl font-fancy bg-gradient-to-r from-primary-accent to-secondary-accent rounded-2xl hover:shadow-2xl hover:scale-105 animate-glow"
                  >
                    ✨ Send Sweet Message ✨
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-bounce-gentle">
              {/* Contact Details Card */}
              <div className="p-8 rounded-[2rem] bg-white/40 backdrop-blur-xl border-2 border-white/50 shadow-2xl">
                <h3 className="mb-6 text-3xl font-bold text-center font-fancy text-dark-base">
                  🏰 Our Sweet Castle
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-primary-accent/20 to-rose/20">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold font-stylish text-dark-base">
                        Visit Us
                      </h4>
                      <p className="font-modern text-dark-base/70">
                        123 Sweet Dreams Lane
                        <br />
                        Candy Kingdom, CK 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-secondary-accent/20 to-lavender/20">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold font-stylish text-dark-base">
                        Call Us
                      </h4>
                      <p className="font-modern text-dark-base/70">
                        070-0000000
                        <br />
                        1-800-SWEETS
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-tertiary-accent/20 to-light-base/20">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold font-stylish text-dark-base">
                        Email Us
                      </h4>
                      <p className="font-modern text-dark-base/70">
                        hello@sweetempire.com
                        <br />
                        orders@sweetempire.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="p-8 rounded-[2rem] bg-white/40 backdrop-blur-xl border-2 border-white/50 shadow-2xl">
                <h3 className="mb-6 text-3xl font-bold text-center font-fancy text-dark-base">
                  ⏰ Sweet Hours
                </h3>
                <div className="space-y-3 font-modern">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-dark-base">
                      Monday - Friday
                    </span>
                    <span className="text-dark-base/70">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-dark-base">
                      Saturday
                    </span>
                    <span className="text-dark-base/70">
                      10:00 AM - 9:00 PM
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-dark-base">Sunday</span>
                    <span className="text-dark-base/70">
                      11:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="p-3 mt-4 text-center bg-gradient-to-r from-primary-accent/10 to-rose/10 rounded-xl">
                    <span className="text-lg font-elegant text-dark-base">
                      ✨ Sweet dreams are made 24/7! ✨
                    </span>
                  </div>
                </div>
              </div>

              {/* Team Contact */}
              <div className="p-8 rounded-[2rem] bg-white/40 backdrop-blur-xl border-2 border-white/50 shadow-2xl">
                <h3 className="mb-6 text-3xl font-bold text-center font-fancy text-dark-base">
                  👥 Meet Our Sweet Team
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-rose/10 to-primary-accent/10 rounded-xl">
                    <h4 className="text-lg font-bold font-stylish text-dark-base">
                      Chef Isabella Rose 🌹
                    </h4>
                    <p className="font-modern text-dark-base/70">
                      Head Confectioner
                    </p>
                    <p className="text-sm font-modern text-dark-base/60">
                      isabella@sweetempire.com
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-secondary-accent/10 to-lavender/10 rounded-xl">
                    <h4 className="text-lg font-bold font-stylish text-dark-base">
                      Marcus Sweetworth 🍭
                    </h4>
                    <p className="font-modern text-dark-base/70">
                      Innovation Director
                    </p>
                    <p className="text-sm font-modern text-dark-base/60">
                      marcus@sweetempire.com
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-tertiary-accent/10 to-light-base/10 rounded-xl">
                    <h4 className="text-lg font-bold font-stylish text-dark-base">
                      Luna Sparkles 🌙
                    </h4>
                    <p className="font-modern text-dark-base/70">
                      Customer Happiness
                    </p>
                    <p className="text-sm font-modern text-dark-base/60">
                      luna@sweetempire.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative px-6 py-20 bg-gradient-to-br from-cream/50 to-tertiary-accent/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center px-8 py-4 mb-8 border rounded-full shadow-xl bg-gradient-to-r from-primary-accent/20 to-rose/20 border-primary-accent/30">
              <span className="text-xl font-stylish text-dark-base">
                ❓ Sweet Questions ❓
              </span>
            </div>
            <h2 className="mb-6 text-6xl font-black text-transparent font-fancy bg-clip-text bg-gradient-to-r from-secondary-accent to-primary-accent">
              Frequently Asked
            </h2>
            <p className="text-2xl font-medium font-modern text-dark-base/80">
              Quick answers to your sweetest questions! 🍯
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                q: "🚚 Do you deliver nationwide?",
                a: "Yes! We deliver our sweet magic all across the country with special packaging to ensure freshness!",
              },
              {
                q: "🎂 Can you create custom orders?",
                a: "Absolutely! We love bringing your sweet dreams to life. Contact us with your ideas and we'll make it happen!",
              },
              {
                q: "🌱 Do you have vegan options?",
                a: "Yes! We have a magical selection of vegan and gluten-free treats that taste just as amazing!",
              },
              {
                q: "📦 How long does shipping take?",
                a: "Standard delivery is 2-3 days, and we offer next-day delivery for those sweet emergencies!",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="p-6 transition-all duration-300 transform border-2 shadow-xl rounded-2xl bg-white/40 backdrop-blur-xl border-white/50 hover:shadow-2xl hover:scale-105"
              >
                <h3 className="mb-3 text-lg font-bold font-stylish text-dark-base">
                  {faq.q}
                </h3>
                <p className="font-modern text-dark-base/80">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative px-6 py-20 bg-gradient-to-r from-primary-accent via-rose to-secondary-accent">
        <div className="max-w-5xl mx-auto text-center">
          <div className="p-16 rounded-[3rem] backdrop-blur-2xl bg-white/10 border-4 border-white/20 shadow-2xl">
            <div className="inline-flex items-center px-8 py-4 mb-8 border rounded-full bg-white/20 border-white/30">
              <span className="text-xl text-white font-elegant">
                🎪 Ready to Order? 🎪
              </span>
            </div>
            <h2 className="mb-8 text-6xl font-black text-white font-fancy">
              Let's Make Some
              <span className="block text-5xl font-elegant text-tertiary-accent animate-bounce-gentle">
                Sweet Magic! ✨
              </span>
            </h2>
            <p className="mb-12 text-2xl font-medium leading-relaxed font-modern text-white/90">
              Browse our enchanted collection or reach out for custom creations!
              🌈💖
            </p>
            <div className="flex flex-col gap-6 sm:flex-row sm:justify-center">
              <a
                href="/catalog"
                className="group px-12 py-6 font-fancy font-black text-2xl bg-white text-secondary-accent rounded-[2rem] shadow-2xl hover:shadow-white/50 transform hover:scale-110 transition-all duration-500"
              >
                <span className="flex items-center justify-center gap-4">
                  🛍️ Shop Now
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
