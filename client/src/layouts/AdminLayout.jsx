import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar.jsx";
import Topbar from "../components/common/Topbar.jsx";

export default function AdminLayout() {
  return (
    <div className="min-h-screen grid grid-cols-[220px_1fr] bg-gray-50">
      <Sidebar />
      <div className="flex flex-col">
        <Topbar />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
