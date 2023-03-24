import axios, { type AxiosInstance as OriginalAxiosInstance } from "axios";

interface AxiosInstance extends OriginalAxiosInstance {
  setToken(token: string): void;
}

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

instance.setToken = function (token: string) {
  instance.defaults.headers.common = { Authorization: `Bearer ${token}` };
};

let token = localStorage.getItem("token");
if (token) {
  instance.setToken(token);
}

export default instance;
