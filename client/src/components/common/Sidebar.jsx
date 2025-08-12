import { NavLink } from "react-router-dom";

const link = ({ isActive }) =>
  `block px-4 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 font-stylish font-semibold ${isActive
    ? "bg-gradient-to-r from-primary-accent to-secondary-accent text-white shadow-lg animate-glow"
    : "text-dark-base hover:bg-gradient-to-r hover:from-primary-accent/20 hover:to-secondary-accent/20 hover:text-dark-base"
  }`;

export default function Sidebar() {
  return (
    <aside className="p-6 border-r-4 bg-gradient-to-b from-light-base to-cream border-primary-accent/40 backdrop-blur-lg">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="mb-2 text-4xl animate-bounce-gentle">👑</div>
        <div className="text-2xl font-bold text-transparent font-fancy bg-clip-text bg-gradient-to-r from-secondary-accent to-primary-accent">
          Admin Panel
        </div>
        <div className="mt-1 text-sm font-elegant text-dark-base/70">Sweet Control Center ✨</div>
      </div>

      {/* Navigation */}
      <nav className="space-y-3">
        <NavLink to="/admin" className={link}>
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏠</span>
            <span>Dashboard</span>
          </div>
        </NavLink>

        <NavLink to="/admin/products" className={link}>
          <div className="flex items-center gap-3">
            <span className="text-2xl">🍬</span>
            <span>Products</span>
          </div>
        </NavLink>

        <NavLink to="/admin/inventory" className={link}>
          <div className="flex items-center gap-3">
            <span className="text-2xl">📦</span>
            <span>Inventory</span>
          </div>
        </NavLink>

        <NavLink to="/admin/orders" className={link}>
          <div className="flex items-center gap-3">
            <span className="text-2xl">📋</span>
            <span>Orders</span>
          </div>
        </NavLink>

        <NavLink to="/admin/customers" className={link}>
          <div className="flex items-center gap-3">
            <span className="text-2xl">👥</span>
            <span>Customers</span>
          </div>
        </NavLink>
      </nav>

      {/* Decorative Footer */}
      <div className="p-4 mt-8 border bg-gradient-to-r from-primary-accent/10 to-secondary-accent/10 rounded-2xl border-primary-accent/20">
        <div className="text-center">
          <div className="mb-2 text-3xl animate-float">✨</div>
          <div className="text-sm font-elegant text-dark-base/70">
            Managing Sweet Dreams
          </div>
        </div>
      </div>
    </aside>
  );
}
