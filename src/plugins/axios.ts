import axios, { type AxiosInstance } from "axios";

var token: string | null;

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

if (localStorage.getItem("token")) {
  token = localStorage.getItem("token");
  instance.defaults.headers.common = { Authorization: `Bearer ${token}` };
}

export default instance;
