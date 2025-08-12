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
    <form
      onSubmit={onSubmit}
      className="max-w-sm p-4 mx-auto bg-white rounded shadow"
    >
      <h2 className="mb-3 text-lg font-semibold">Register</h2>
      <div className="grid gap-3">
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
        {msg && <div className="text-sm text-green-700">{msg}</div>}
        <Button type="submit">Create account</Button>
      </div>
    </form>
  );
}
