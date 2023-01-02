import type AssignmentTemplateApi from "@/api/assignmentTemplate";
import { ApiService, type ApiServiceResponse } from "./apiService";
import type { DeleteService } from "./interfaces/DeleteService";
import type { FindService } from "./interfaces/FindService";

export class AssignmentTemplateService
  extends ApiService
  implements DeleteService, FindService
{
  constructor(private api: AssignmentTemplateApi) {
    super(api);
  }

  // Example where its defined a new method
  async _customMethodExample(): Promise<ApiServiceResponse<unknown>> {
    return await this.handleRequest<unknown>(this.api.getAll);
  }
}
