import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

export default function Protected({ children }) {
  const { token } = useAuth();

  if (!token) {
    return (
      <div className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
        <div className="p-8 text-center border rounded-lg shadow-lg bg-light-base border-primary-accent/20">
          <h2 className="mb-4 text-xl font-semibold text-dark-base">
            Authentication Required
          </h2>
          <p className="text-dark-base/70">Redirecting to login page...</p>
        </div>
        <Navigate to="/login" replace />
      </div>
    );
  }

  return children;
}
