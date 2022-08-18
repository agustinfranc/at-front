import axios from "axios";

const instance = axios.create({
  headers: { Authorization: "1234" },
});

export default instance;
