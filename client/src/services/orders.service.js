import api from "./apiClient";
export default {
  async list(params) {
    const { data } = await api.get("/orders", { params });
    return data;
  },
  async create(payload) {
    const { data } = await api.post("/orders", payload);
    return data;
  },
  async updateStatus(id, status) {
    const { data } = await api.patch(`/orders/${id}/status`, { status });
    return data;
  },
  async cancel(id) {
    const { data } = await api.post(`/orders/${id}/cancel`);
    return data;
  },
  async remove(id) {
    const { data } = await api.delete(`/orders/${id}`);
    return data;
  },
};
