import type AssignmentApi from "@/api/assignment";
import type Assignment from "@/api/assignment/interface";
import { ApiService, type ApiServiceResponse } from "./apiService";

export class AssignmentService extends ApiService {
  constructor(private api: AssignmentApi) {
    super();
  }

  async find(): Promise<ApiServiceResponse<Assignment[]>> {
    return await this.handleRequest<Assignment[]>(this.api.getAll);
  }

  async findOne(): Promise<ApiServiceResponse<Assignment>> {
    return await this.handleRequest<Assignment>(this.api.getOne);
  }

  async create(
    assignment: Assignment
  ): Promise<ApiServiceResponse<Assignment>> {
    return await this.handleRequest<Assignment>(this.api.create, {
      ...assignment,
    });
  }
}