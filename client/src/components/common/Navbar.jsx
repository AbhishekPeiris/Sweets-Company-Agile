import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-md font-medium transition-colors duration-200 ${isActive
      ? "bg-primary-accent text-dark-base"
      : "text-dark-base hover:bg-secondary-accent hover:text-white"
    }`;

  return (
    <header className="border-b shadow-sm bg-light-base border-primary-accent/30">
      <div className="flex items-center justify-between max-w-6xl px-4 py-3 mx-auto">
        <Link
          to="/"
          className="text-2xl font-bold transition-colors duration-200 text-dark-base hover:text-primary-accent"
        >
          🍬 Sweets Company
        </Link>

        <nav className="items-center hidden space-x-2 md:flex">
          <NavLink to="/catalog" className={navLinkClass}>
            Catalog
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        <div className="flex items-center space-x-3">
          {user ? (
            <>
              <NavLink
                to="/admin"
                className="px-4 py-2 font-medium transition-colors duration-200 text-dark-base hover:text-primary-accent"
              >
                Admin
              </NavLink>
              <button
                onClick={logout}
                className="px-4 py-2 font-medium text-white transition-colors duration-200 rounded-md bg-dark-base hover:bg-secondary-accent"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="px-4 py-2 font-medium transition-colors duration-200 text-dark-base hover:text-secondary-accent"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="px-4 py-2 font-medium transition-colors duration-200 rounded-md bg-primary-accent text-dark-base hover:bg-secondary-accent hover:text-white"
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
