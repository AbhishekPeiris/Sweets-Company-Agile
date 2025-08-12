import { useState } from "react";
import Input from "../../components/ui/Input.jsx";
import Button from "../../components/ui/Button.jsx";
import authService from "../../services/auth.service.js";
import { useAuth } from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const nav = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      const res = await authService.login({ email, password });
      login(res.token, res.user);
      // nav("/admin");
      if (res.user.role === "admin") {
        nav("/admin");
      } else {
        nav("/");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  }

  return (
    <div className="relative flex items-center justify-center min-h-screen px-4 overflow-hidden bg-gradient-sweet">
      {/* Floating decorations */}
      <div className="absolute w-24 h-24 rounded-full top-20 left-10 bg-rose/30 animate-float blur-xl"></div>
      <div className="absolute w-32 h-32 rounded-full bottom-20 right-10 bg-lavender/40 animate-bounce-gentle blur-2xl"></div>

      <form
        onSubmit={onSubmit}
        className="relative w-full max-w-lg p-12 border-4 shadow-2xl rounded-3xl bg-white/80 backdrop-blur-2xl border-white/50 animate-glow"
      >
        <h2 className="mb-8 text-4xl font-black text-center text-transparent font-fancy bg-clip-text bg-gradient-to-r from-secondary-accent to-primary-accent">
          ✨ Welcome Back ✨
        </h2>
        <div className="space-y-6">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && (
            <div className="p-3 text-sm text-red-700 border border-red-200 rounded-md bg-red-50">
              {error}
            </div>
          )}
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </div>
      </form>
    </div>
  );
}
