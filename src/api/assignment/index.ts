import type { AxiosPromise } from "axios";
import type Assignment from "./interface";
import axiosInstance from "@/plugins/axios";

class AssignmentApi {
  getAll(): AxiosPromise<Assignment[]> {
    return axiosInstance.get("/assignments");
  }

  getOne(id: number): AxiosPromise<Assignment[]> {
    return axiosInstance.get(`/assignments/${id}`);
  }

  create(assignment: Assignment): AxiosPromise<Assignment> {
    return axiosInstance.post("/assignments", assignment);
  }
}

export default AssignmentApi;
