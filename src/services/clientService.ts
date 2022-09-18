import type ClientApi from "@/api/client";
import type Client from "@/api/client/interface";
import { ApiService, type ApiServiceResponse } from "./apiService";

export class ClientService extends ApiService {
  constructor(private api: ClientApi) {
    super();
  }

  async find(): Promise<ApiServiceResponse<Client[]>> {
    return await this.handleRequest<Client[]>(this.api.getAll);
  }

  async findOne(): Promise<ApiServiceResponse<Client>> {
    return await this.handleRequest<Client>(this.api.getOne);
  }

  async create(client: Client): Promise<ApiServiceResponse<Client>> {
    return await this.handleRequest<Client>(this.api.create, { data: client });
  }
}
