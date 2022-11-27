import axiosInstance from "@/plugins/axios";

class GenerateAssignmentsApi {
  generate() {
    return axiosInstance.post("/create-assignments-from-template");
  }
}

export default GenerateAssignmentsApi;
