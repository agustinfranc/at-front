import type { AxiosPromise } from "axios";
import axiosInstance from "@/plugins/axios";

class GenerateAssignmentApi {
  generate() {
    return axiosInstance.post("/create-assignments-from-template");
  }
}

export default GenerateAssignmentApi;
