import axios from "@/plugins/axios";

class AssignmentApi {
  static async get() {
    try {
      return await axios.get("/assignments");
    } catch (error) {
      return error;
    }
  }

  //TODO: tipar assignment
  static async post(assignment) {
    try {
      return await axios.post("/assignment", assignment);
    } catch (error) {
      return error;
    }
  }
}

export default AssignmentApi;
