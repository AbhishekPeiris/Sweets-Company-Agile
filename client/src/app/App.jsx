import AppRoutes from "./routes.jsx";
import { AuthProvider } from "../context/AuthContext.jsx";

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}
