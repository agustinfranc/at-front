import type AssignmentApi from "@/api/assignment";
import type Assignment from "@/api/assignment/interface";
import { ApiService, type ApiServiceResponse } from "./apiService";
import type { DeleteService } from "./interfaces/DeleteService";
import type { FindService } from "./interfaces/FindService";

export class AssignmentService
  extends ApiService
  implements DeleteService, FindService
{
  constructor(private api: AssignmentApi) {
    super();
  }

  async find(): Promise<ApiServiceResponse<Assignment[]>> {
    return await this.handleRequest<Assignment[]>(this.api.getAll);
  }

  async findOne(id: number): Promise<ApiServiceResponse<Assignment>> {
    return await this.handleRequest<Assignment>(this.api.getOne, id);
  }

  async create(
    assignment: Assignment
  ): Promise<ApiServiceResponse<Assignment>> {
    return await this.handleRequest<Assignment>(this.api.create, {
      ...assignment,
    });
  }

  async update(
    assignment: Assignment
  ): Promise<ApiServiceResponse<Assignment>> {
    return await this.handleRequest<Assignment>(this.api.update, {
      ...assignment,
    });
  }

  async delete(id: number): Promise<ApiServiceResponse<boolean>> {
    return await this.handleRequest<boolean>(this.api.delete, id);
  }
}
