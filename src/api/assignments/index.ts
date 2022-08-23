import axios from "../../plugins/axios";

class AssignmentsApi {
  static async get() {
    try {
      return await axios.get("/assignments");
    } catch (error) {
      return error;
    }
  }
}

export default AssignmentsApi;
