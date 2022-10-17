import type AssignmentApi from "@/api/assignment";
import { ApiService, type ApiServiceResponse } from "./apiService";
import type { DeleteService } from "./interfaces/DeleteService";
import type { FindService } from "./interfaces/FindService";

export class AssignmentService
  extends ApiService
  implements DeleteService, FindService
{
  constructor(private api: AssignmentApi) {
    super(api);
  }

  // Example where its defined a new method
  async _customMethodExample(): Promise<ApiServiceResponse<unknown>> {
    return await this.handleRequest<unknown>(this.api.getAll);
  }

  // Example where I can replace default find from apiService
  // async find<Assignment = any>(): Promise<ApiServiceResponse<Assignment[]>> {
  //   return await this.handleRequest<Assignment[]>(this.api.getAll);
  // }
}
