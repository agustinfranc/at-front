import type { AxiosPromise } from "axios";
import type AssignmentTemplate from "./interface";
import axiosInstance from "@/plugins/axios";

class AssignmentTemplateApi {
  getAll(): AxiosPromise<AssignmentTemplate[]> {
    return axiosInstance.get("/assignment-templates");
  }

  getOne(id: number): AxiosPromise<AssignmentTemplate[]> {
    return axiosInstance.get(`/assignment-templates/${id}`);
  }

  create(assignment: AssignmentTemplate): AxiosPromise<AssignmentTemplate> {
    return axiosInstance.post("/assignment-templates", assignment);
  }

  update(assignment: AssignmentTemplate): AxiosPromise<AssignmentTemplate> {
    return axiosInstance.put(
      `/assignment-templates/${assignment.id}`,
      assignment
    );
  }

  delete(id: number): AxiosPromise<boolean> {
    return axiosInstance.delete(`/assignment-templates/${id}`);
  }
}

export default AssignmentTemplateApi;
