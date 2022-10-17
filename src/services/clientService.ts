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
}
