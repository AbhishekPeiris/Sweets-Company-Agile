import { NavLink } from "react-router-dom";

const link = ({ isActive }) =>
  `block px-3 py-2 rounded transition-colors duration-200 ${isActive
    ? "bg-dark-base text-white"
    : "text-dark-base hover:bg-primary-accent/20 hover:text-dark-base"
  }`;

export default function Sidebar() {
  return (
    <aside className="p-4 border-r bg-light-base border-primary-accent/30">
      <div className="mb-4 text-lg font-semibold text-dark-base">Admin Panel</div>
      <nav className="space-y-1">
        <NavLink to="/admin" className={link}>
          Dashboard
        </NavLink>
        <NavLink to="/admin/products" className={link}>
          Products
        </NavLink>
        <NavLink to="/admin/inventory" className={link}>
          Inventory
        </NavLink>
        <NavLink to="/admin/orders" className={link}>
          Orders
        </NavLink>
        <NavLink to="/admin/customers" className={link}>
          Customers
        </NavLink>
      </nav>
    </aside>
  );
}
