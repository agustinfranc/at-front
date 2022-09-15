import axios, { type AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  headers: { Authorization: "1234" },
  baseURL: "http://localhost/api",
});

export default instance;
