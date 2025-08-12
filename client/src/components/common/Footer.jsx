export default function Footer() {
  return (
    <footer className="relative border-t-4 bg-gradient-to-r from-cream via-tertiary-accent/30 to-cream border-primary-accent/40 overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute top-2 left-10 w-4 h-4 bg-rose/20 rounded-full animate-bounce-gentle blur-sm"></div>
      <div className="absolute top-1 right-16 w-3 h-3 bg-lavender/30 rounded-full animate-float blur-sm"></div>
      <div className="absolute bottom-2 left-1/2 w-5 h-5 bg-primary-accent/20 rounded-full animate-pulse-slow blur-sm"></div>

      <div className="relative max-w-7xl px-6 py-8 mx-auto">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo section */}
          <div className="flex items-center gap-3">
            <span className="text-3xl animate-wiggle">🍬</span>
            <span className="font-fancy text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary-accent to-primary-accent">
              Sweet Empire
            </span>
            <span className="text-2xl animate-float">✨</span>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="font-modern text-lg font-medium text-dark-base/80">
              © {new Date().getFullYear()} Sweet Empire. All rights reserved.
            </p>
            <p className="font-elegant text-sm text-dark-base/60 mt-1">
              Made with 💖 and lots of sugar! 🌈
            </p>
          </div>

          {/* Social links placeholder */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-r from-primary-accent/20 to-rose/20 rounded-full hover:from-primary-accent/40 hover:to-rose/40 transition-all duration-300 cursor-pointer transform hover:scale-110">
              <span className="text-2xl">📱</span>
            </div>
            <div className="p-3 bg-gradient-to-r from-secondary-accent/20 to-lavender/20 rounded-full hover:from-secondary-accent/40 hover:to-lavender/40 transition-all duration-300 cursor-pointer transform hover:scale-110">
              <span className="text-2xl">📧</span>
            </div>
            <div className="p-3 bg-gradient-to-r from-tertiary-accent/20 to-light-base/20 rounded-full hover:from-tertiary-accent/40 hover:to-light-base/40 transition-all duration-300 cursor-pointer transform hover:scale-110">
              <span className="text-2xl">🌟</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
