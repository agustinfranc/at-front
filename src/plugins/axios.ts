import axios, { type AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  headers: { Authorization: "1234" },
  // baseURL: "http://localhost/api",
  baseURL: import.meta.env.VITE_API_URL,
});

export default instance;
