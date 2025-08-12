import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navLinkClass = ({ isActive }) =>
    `px-6 py-3 rounded-2xl font-stylish font-semibold transition-all duration-300 transform hover:scale-105 ${isActive
      ? "bg-gradient-to-r from-primary-accent to-rose text-white shadow-lg animate-glow"
      : "text-dark-base hover:bg-gradient-to-r hover:from-secondary-accent hover:to-lavender hover:text-white hover:shadow-xl"
    }`;

  return (
    <header className="relative border-b-4 shadow-xl bg-gradient-to-r from-cream via-white to-cream border-primary-accent/40 backdrop-blur-lg">
      {/* Decorative elements */}
      <div className="absolute top-0 left-20 w-8 h-8 bg-rose/20 rounded-full animate-bounce-gentle blur-sm"></div>
      <div className="absolute top-0 right-32 w-6 h-6 bg-lavender/30 rounded-full animate-float blur-sm"></div>

      <div className="flex items-center justify-between max-w-7xl px-6 py-4 mx-auto">
        <Link
          to="/"
          className="group flex items-center gap-3 font-fancy text-3xl font-black transition-all duration-300 transform hover:scale-110"
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
        </nav>

        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <NavLink
                to="/admin"
                className="px-6 py-3 font-stylish font-semibold transition-all duration-300 transform hover:scale-105 text-dark-base hover:text-primary-accent"
              >
                👑 Admin
              </NavLink>
              <button
                onClick={logout}
                className="px-6 py-3 font-stylish font-semibold text-white transition-all duration-300 transform hover:scale-105 rounded-2xl bg-gradient-to-r from-secondary-accent to-primary-accent hover:from-primary-accent hover:to-rose shadow-lg hover:shadow-xl animate-glow"
              >
                👋 Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="px-6 py-3 font-stylish font-semibold transition-all duration-300 transform hover:scale-105 text-dark-base hover:text-secondary-accent"
              >
                🔑 Login
              </NavLink>
              <NavLink
                to="/register"
                className="px-6 py-3 font-stylish font-semibold text-white transition-all duration-300 transform hover:scale-105 rounded-2xl bg-gradient-to-r from-primary-accent to-rose hover:from-rose hover:to-secondary-accent shadow-lg hover:shadow-xl animate-glow"
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
