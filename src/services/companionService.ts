import type CompanionApi from "@/api/companion";
import type Companion from "@/api/companion/interface";
import { ApiService, type ApiServiceResponse } from "./apiService";
import type { DeleteService } from "./interfaces/DeleteService";
import type { FindService } from "./interfaces/FindService";

export class CompanionService
  extends ApiService
  implements DeleteService, FindService
{
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

  async update(companion: Companion): Promise<ApiServiceResponse<Companion>> {
    return await this.handleRequest<Companion>(this.api.update, {
      ...companion,
    });
  }

  async delete(id: number): Promise<ApiServiceResponse<boolean>> {
    return await this.handleRequest<boolean>(this.api.delete, id);
  }
}
