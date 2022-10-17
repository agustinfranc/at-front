import type ClientApi from "@/api/client";
import { ApiService, type ApiServiceResponse } from "./apiService";

export class ClientService extends ApiService {
  constructor(private api: ClientApi) {
    super(api);
  }

  async _customMethodExample(): Promise<ApiServiceResponse<unknown>> {
    return await this.handleRequest<unknown>(this.api.getAll);
  }
}
