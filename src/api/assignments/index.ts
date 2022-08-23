import axios from "../../plugins/axios";

class AssignmentsApi {
  static async get() {
    try {
      return await axios.get("/assignments");
    } catch (error) {
      return error;
    }
  }

  static async post(assignment) {
    try {
      const response = await axios.post("/assignment", assignment);
      return response;
    } catch (error) {
      return error;
    }
  }
}

export default AssignmentsApi;
