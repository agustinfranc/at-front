import axios, { type AxiosInstance as OriginalAxiosInstance } from "axios";
import router from "@/router";

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
} else {
  router.push({
    name: "login",
  });
}

export default instance;
