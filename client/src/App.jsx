import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="px-4 py-3 bg-white shadow">
        <nav className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/login" className="ml-auto">Login</Link>
          <Link to="/admin" className="font-medium">Admin</Link>
        </nav>
      </header>

      <main className="p-4 max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
}
