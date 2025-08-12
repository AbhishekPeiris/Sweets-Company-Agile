import { useAuth } from "../../context/AuthContext.jsx";

export default function Topbar() {
  const { user } = useAuth();
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white border-b">
      <div className="font-medium">Sweets Admin</div>
      <div className="text-sm text-gray-600">
        Signed in as: {user?.name || "—"}
      </div>
    </div>
  );
}
