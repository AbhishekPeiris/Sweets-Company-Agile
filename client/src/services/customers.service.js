import api from "./apiClient";
export default {
  async list(params) {
    const { data } = await api.get("/customers", { params });
    return data;
  },
  async create(payload) {
    const { data } = await api.post("/customers", payload);
    return data;
  },
  async get(id) {
    const { data } = await api.get(`/customers/${id}`);
    return data;
  },
  async update(id, payload) {
    const { data } = await api.put(`/customers/${id}`, payload);
    return data;
  },
  async remove(id) {
    const { data } = await api.delete(`/customers/${id}`);
    return data;
  },
};
