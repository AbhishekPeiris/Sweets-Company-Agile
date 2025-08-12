import { useState } from "react";
import Input from "../../components/ui/Input.jsx";
import Button from "../../components/ui/Button.jsx";
import authService from "../../services/auth.service.js";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const [msg, setMsg] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setMsg("");
    await authService.register({ name, email, password });
    setMsg("Registered! Please login.");
    setTimeout(() => nav("/login"), 800);
  }

  return (
    <div className="relative flex items-center justify-center min-h-screen px-4 overflow-hidden bg-gradient-sweet">
      {/* Floating decorations */}
      <div className="absolute w-20 h-20 rounded-full top-16 left-12 bg-lavender/30 animate-float blur-xl"></div>
      <div className="absolute rounded-full bottom-24 right-16 w-28 h-28 bg-rose/40 animate-bounce-gentle blur-2xl"></div>
      <div className="absolute w-16 h-16 rounded-full top-1/2 left-20 bg-tertiary-accent/40 animate-pulse-slow blur-lg"></div>

      <form
        onSubmit={onSubmit}
        className="relative w-full max-w-lg p-12 border-4 shadow-2xl rounded-3xl bg-white/80 backdrop-blur-2xl border-white/50 animate-glow"
      >
        <h2 className="mb-8 text-4xl font-black text-center text-transparent font-fancy bg-clip-text bg-gradient-to-r from-secondary-accent via-primary-accent to-rose">
          ✨ Join Our Sweet Family ✨
        </h2>
        <div className="space-y-6">
          <Input
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          {msg && (
            <div className="p-4 text-sm font-medium text-green-800 border-2 border-green-300 rounded-2xl bg-green-50/80 backdrop-blur-sm animate-bounce-gentle">
              🎉 {msg} 🎉
            </div>
          )}
          <Button type="submit" className="w-full">
            Create account
          </Button>
        </div>
      </form>
    </div>
  );
}
