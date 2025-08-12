import { useAuth } from "../../context/AuthContext.jsx";

export default function Topbar() {
  const { user } = useAuth();
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b-4 shadow-lg bg-gradient-to-r from-light-base to-cream border-primary-accent/40 backdrop-blur-lg">
      <div className="flex items-center gap-3">
        <span className="text-2xl animate-wiggle">🍬</span>
        <div className="text-2xl font-bold text-transparent font-fancy bg-clip-text bg-gradient-to-r from-secondary-accent to-primary-accent">
          Sweet Admin
        </div>
        <span className="text-xl animate-float">✨</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="p-3 border rounded-full bg-gradient-to-r from-primary-accent/10 to-secondary-accent/10 border-primary-accent/20">
          <span className="text-xl">👤</span>
        </div>
        <div className="text-right">
          <div className="text-sm font-semibold font-stylish text-dark-base">
            Welcome back! 🎉
          </div>
          <div className="text-sm font-modern text-dark-base/70">
            {user?.name || "Sweet Admin"} ✨
          </div>
        </div>
      </div>
    </div>
  );
}
