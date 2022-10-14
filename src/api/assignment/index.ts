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

  update(assignment: Assignment): AxiosPromise<Assignment> {
    return axiosInstance.put(`/assignments/${assignment.id}`, assignment);
  }

  delete(id: number): AxiosPromise<boolean> {
    return axiosInstance.delete(`/assignments/${id}`);
  }
}

export default AssignmentApi;
