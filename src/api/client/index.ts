import axios from "../../plugins/axios";

class Client {
  static async get() {
    try {
      const response = await axios.get("/clients");
      return response;
    } catch (error) {
      return error;
    }
  }
}

export default Client;
