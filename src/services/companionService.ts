import type CompanionApi from "@/api/companion";
import type Companion from "@/api/companion/interface";
import { ApiService, type ApiServiceResponse } from "./apiService";

export class CompanionService extends ApiService {
  constructor(private api: CompanionApi) {
    super();
  }

  async find(): Promise<ApiServiceResponse<Companion[]>> {
    return await this.handleRequest<Companion[]>(this.api.getAll);
  }

  async findOne(id: number): Promise<ApiServiceResponse<Companion>> {
    return await this.handleRequest<Companion>(this.api.getOne, id);
  }

  async create(companion: Companion): Promise<ApiServiceResponse<Companion>> {
    return await this.handleRequest<Companion>(this.api.create, {
      ...companion,
    });
  }
}
