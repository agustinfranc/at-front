import type { AxiosPromise } from "axios";
import type Assignment from "./interface";
import axiosInstance from "@/plugins/axios";

class AssignmentApi {
  getAll(): AxiosPromise<Assignment[]> {
    return axiosInstance.get("/assignments");
  }

  getOne(): AxiosPromise<Assignment[]> {
    return axiosInstance.get("/assignments");
  }

  create(assignment: Assignment): AxiosPromise<Assignment> {
    return axiosInstance.post("/assignments", assignment);
  }
}

export default AssignmentApi;
