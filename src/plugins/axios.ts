import axios, { type AxiosInstance as OriginalAxiosInstance } from "axios";

interface AxiosInstance extends OriginalAxiosInstance {
  setToken(token: string): void;
}

const axiosInstance: OriginalAxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const instance = axiosInstance as AxiosInstance;

instance.setToken = (token: string) =>
  (instance.defaults.headers.common = { Authorization: `Bearer ${token}` });

const token = localStorage.getItem("token");
if (token) {
  instance.setToken(token);
}

export default instance;
