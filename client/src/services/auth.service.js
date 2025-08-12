import api from "./apiClient";
export default {
  async login(payload) {
    const { data } = await api.post("/auth/login", payload);
    return data;
  },
  async register(payload) {
    const { data } = await api.post("/auth/register", payload);
    return data;
  },
  async me() {
    const { data } = await api.get("/auth/me");
    return data;
  },
};
