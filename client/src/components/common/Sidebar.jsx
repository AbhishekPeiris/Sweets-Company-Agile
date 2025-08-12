import { NavLink } from "react-router-dom";

const link = ({ isActive }) =>
  `block px-3 py-2 rounded ${
    isActive ? "bg-gray-800 text-white" : "hover:bg-gray-100"
  }`;

export default function Sidebar() {
  return (
    <aside className="p-3 bg-white border-r">
      <div className="mb-3 font-semibold">Admin</div>
      <nav className="grid gap-1">
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
