import axios from "@/plugins/axios";

class ClientApi {
  static async get() {
    try {
      return await axios.get("/clients");
    } catch (error) {
      return error;
    }
  }

  static async post(client) {
    try {
      return await axios.post("/clients", client);
    } catch (error) {
      return error;
    }
  }
}

export default ClientApi;
