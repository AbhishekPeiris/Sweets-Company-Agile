import { useAuth } from "../../context/AuthContext.jsx";

export default function Topbar() {
  const { user } = useAuth();
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b bg-light-base border-primary-accent/30">
      <div className="font-medium text-dark-base">Sweets Admin</div>
      <div className="text-sm text-dark-base/70">
        Signed in as: {user?.name || "—"}
      </div>
    </div>
  );
}
