import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import { useCart } from "../../context/CartContext.jsx";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { getTotalItems } = useCart();
  const navLinkClass = ({ isActive }) =>
    `px-6 py-3 rounded-2xl font-stylish font-semibold transition-all duration-300 transform hover:scale-105 ${isActive
      ? "bg-gradient-to-r from-primary-accent to-rose text-white shadow-lg animate-glow"
      : "text-dark-base hover:bg-gradient-to-r hover:from-secondary-accent hover:to-lavender hover:text-white hover:shadow-xl"
    }`;

  return (
    <header className="relative border-b-4 shadow-xl bg-gradient-to-r from-cream via-white to-cream border-primary-accent/40 backdrop-blur-lg">
      {/* Decorative elements */}
      <div className="absolute top-0 w-8 h-8 rounded-full left-20 bg-rose/20 animate-bounce-gentle blur-sm"></div>
      <div className="absolute top-0 w-6 h-6 rounded-full right-32 bg-lavender/30 animate-float blur-sm"></div>

      <div className="flex items-center justify-between max-w-full px-6 py-4 mx-auto">
        <Link
          to="/"
          className="flex items-center gap-3 text-3xl font-black transition-all duration-300 transform group font-fancy hover:scale-110"
        >
          <span className="text-4xl animate-wiggle group-hover:animate-bounce-gentle">🍬</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-accent via-primary-accent to-rose">
            Sweet Empire
          </span>
          <span className="text-2xl animate-float">✨</span>
        </Link>

        <nav className="items-center hidden space-x-4 md:flex">
          <NavLink to="/catalog" className={navLinkClass}>
            🛍️ Catalog
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            🎭 About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            💌 Contact
          </NavLink>
          <NavLink to="/cart" className={({ isActive }) =>
            `relative px-6 py-3 rounded-2xl font-stylish font-semibold transition-all duration-300 transform hover:scale-105 ${isActive
              ? "bg-gradient-to-r from-primary-accent to-rose text-white shadow-lg animate-glow"
              : "text-dark-base hover:bg-gradient-to-r hover:from-secondary-accent hover:to-lavender hover:text-white hover:shadow-xl"
            }`
          }>
            🛒 Cart
            {getTotalItems() > 0 && (
              <span className="absolute flex items-center justify-center w-6 h-6 text-xs font-bold text-white rounded-full -top-2 -right-2 bg-rose animate-bounce-gentle">
                {getTotalItems()}
              </span>
            )}
          </NavLink>
        </nav>

        <div className="flex items-center space-x-4">
          {user ? (
            <>
              {/* Show admin link only for admin users */}
              {user.role === "admin" ? (
                <NavLink
                  to="/admin"
                  className="px-6 py-3 font-semibold transition-all duration-300 transform font-stylish hover:scale-105 text-dark-base hover:text-primary-accent"
                >
                  👑 Admin
                </NavLink>
              ) : (
                /* Show user name for customers */
                <div className="flex items-center gap-2 px-6 py-3 border bg-gradient-to-r from-primary-accent/10 to-secondary-accent/10 rounded-2xl border-primary-accent/20">
                  <span className="text-xl">👤</span>
                  <span className="font-semibold font-stylish text-dark-base">
                    Hello, {user.name}! ✨
                  </span>
                </div>
              )}
              <button
                onClick={logout}
                className="px-6 py-3 font-semibold text-white transition-all duration-300 transform shadow-lg font-stylish hover:scale-105 rounded-2xl bg-gradient-to-r from-secondary-accent to-primary-accent hover:from-primary-accent hover:to-rose hover:shadow-xl animate-glow"
              >
                👋 Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="px-6 py-3 font-semibold transition-all duration-300 transform font-stylish hover:scale-105 text-dark-base hover:text-secondary-accent"
              >
                🔑 Login
              </NavLink>
              <NavLink
                to="/register"
                className="px-6 py-3 font-semibold text-white transition-all duration-300 transform shadow-lg font-stylish hover:scale-105 rounded-2xl bg-gradient-to-r from-primary-accent to-rose hover:from-rose hover:to-secondary-accent hover:shadow-xl animate-glow"
              >
                ✨ Join Us
              </NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
