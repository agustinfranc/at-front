import axios from "axios";

const instance = axios.create({
  headers: { Authorization: "1234" },
  baseURL: 'http://localhost/api'
});

export default instance;
