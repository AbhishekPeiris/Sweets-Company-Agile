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
      nav("/admin");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-sm p-4 mx-auto bg-white rounded shadow"
    >
      <h2 className="mb-3 text-lg font-semibold">Login</h2>
      <div className="grid gap-3">
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
        {error && <div className="text-sm text-red-600">{error}</div>}
        <Button type="submit">Sign in</Button>
      </div>
    </form>
  );
}
