import axios from "@/plugins/axios";

class ClientApi {
  static async get() {
    try {
      return await axios.get("/clients");
    } catch (error) {
      return error;
    }
  }
}

export default ClientApi;
