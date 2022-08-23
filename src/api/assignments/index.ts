import axios from "../../plugins/axios";

class Assignments {
  static async get() {
    try {
      const response = await axios.get("/assignments");
      return response;
    } catch (error) {
      return error;
    }
  }
}

export default Assignments;
