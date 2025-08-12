import { createContext, useContext, useEffect, useState } from "react";
import authApi from "../services/auth.service.js";

const AuthCtx = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Error parsing stored user:", error);
      return null;
    }
  });

  function login(t, u) {
    console.log("Login called with:", { token: t, user: u }); // Debug log
    setToken(t);
    setUser(u);
    localStorage.setItem("token", t);
    localStorage.setItem("user", JSON.stringify(u));
  }

  function logout() {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  useEffect(() => {
    // optional: verify token
    if (token && !user) {
      authApi
        .me()
        .then((r) => {
          console.log("User data from API:", r.user); // Debug log
          setUser(r.user);
        })
        .catch((error) => {
          console.error("Failed to get user data:", error);
          logout();
        });
    }
  }, [token, user]);

  return (
    <AuthCtx.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthCtx.Provider>
  );
}

export function useAuth() {
  return useContext(AuthCtx);
}
