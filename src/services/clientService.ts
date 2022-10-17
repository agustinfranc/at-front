import type ClientApi from "@/api/client";
import type Client from "@/api/client/interface";
import { ApiService, type ApiServiceResponse } from "./apiService";

export class ClientService extends ApiService {
  constructor(private api: ClientApi) {
    super(api);
  }

  async _customMethodExample(): Promise<ApiServiceResponse<any>> {
    return await this.handleRequest<any>(this.api.getAll);
  }

  async update(client: Client): Promise<ApiServiceResponse<Client>> {
    return await this.handleRequest<Client>(this.api.update, { ...client });
  }

  async delete(id: number): Promise<ApiServiceResponse<boolean>> {
    return await this.handleRequest<boolean>(this.api.delete, id);
  }
}
