import api from "./apiClient";
export default {
  async list(params) {
    const { data } = await api.get("/inventory", { params });
    return data;
  },
  async create(payload) {
    const { data } = await api.post("/inventory", payload);
    return data;
  },
  async update(id, payload) {
    const { data } = await api.patch(`/inventory/${id}`, payload);
    return data;
  },
  async remove(id) {
    const { data } = await api.delete(`/inventory/${id}`);
    return data;
  },
};
