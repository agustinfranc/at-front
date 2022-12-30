import axiosInstance from "@/plugins/axios";
import type { AxiosPromise } from "axios";
import type AssignmentTemplate from "../assignmentTemplate/interface";

class GenerateAssignmentsApi {
  generate(): AxiosPromise<AssignmentTemplate[]> {
    return axiosInstance.post("/create-assignments-from-template");
  }
}

export default GenerateAssignmentsApi;
