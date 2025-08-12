import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

export default function Navbar() {
  const { user, logout } = useAuth();
  const nav = "px-3 py-2 rounded hover:bg-gray-100";
  return (
    <header className="bg-white border-b">
      <div className="flex items-center max-w-6xl gap-3 p-3 mx-auto">
        <Link to="/" className="font-semibold">
          🍬 Sweets Company
        </Link>
        <NavLink to="/catalog" className={nav}>
          Catalog
        </NavLink>
        <NavLink to="/about" className={nav}>
          About
        </NavLink>
        <NavLink to="/contact" className={nav}>
          Contact
        </NavLink>
        <div className="flex items-center gap-2 ml-auto">
          {user ? (
            <>
              <NavLink to="/admin" className={nav}>
                Admin
              </NavLink>
              <button
                onClick={logout}
                className="px-3 py-2 text-white bg-gray-800 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={nav}>
                Login
              </NavLink>
              <NavLink to="/register" className={nav}>
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
