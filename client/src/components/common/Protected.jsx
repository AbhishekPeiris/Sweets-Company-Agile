import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

export default function Protected({ children }) {
  const { token } = useAuth();

  if (!token) {
    return (
      <div className="relative flex items-center justify-center min-h-screen px-4 overflow-hidden bg-gradient-sweet">
        {/* Floating decorations */}
        <div className="absolute w-20 h-20 rounded-full top-20 left-12 bg-lavender/30 animate-float blur-xl"></div>
        <div className="absolute rounded-full bottom-24 right-16 w-28 h-28 bg-rose/40 animate-bounce-gentle blur-2xl"></div>

        <div className="p-12 text-center border-4 shadow-2xl rounded-3xl bg-white/80 backdrop-blur-2xl border-white/50 animate-glow">
          <div className="mb-6 text-6xl animate-wiggle">🔐</div>
          <h2 className="mb-4 text-3xl font-bold text-transparent font-fancy bg-clip-text bg-gradient-to-r from-secondary-accent to-primary-accent">
            Authentication Required
          </h2>
          <p className="mb-6 text-lg font-modern text-dark-base/70">
            Redirecting to login page... ✨
          </p>
          <div className="animate-bounce-gentle">
            <div className="w-8 h-8 mx-auto rounded-full bg-gradient-to-r from-primary-accent to-secondary-accent animate-pulse"></div>
          </div>
        </div>
        <Navigate to="/login" replace />
      </div>
    );
  }

  return children;
}
