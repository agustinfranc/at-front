import type AssignmentTemplate from "@/api/assignmentTemplate/interface";
import type GenerateAssignmentsApi from "@/api/generateAssigment";
import { ApiService, type ApiServiceResponse } from "./apiService";

export class GenerateAssignmentService extends ApiService {
  constructor(private api: GenerateAssignmentsApi) {
    super(api);
  }

  async generate(): Promise<ApiServiceResponse<AssignmentTemplate[]>> {
    return await this.handleRequest<AssignmentTemplate[]>(this.api.generate);
  }
}
