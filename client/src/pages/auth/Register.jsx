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
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-lg p-10 border rounded-lg shadow-lg bg-light-base border-primary-accent/20"
      >
        <h2 className="mb-8 text-2xl font-bold text-center text-dark-base">
          Create Your Account
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
            <div className="p-3 text-sm text-green-700 border border-green-200 rounded-md bg-green-50">
              {msg}
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
