import axios from "axios";

// VITE_ prefix is required for client env vars
const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE,
    withCredentials: false,
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export default api;
