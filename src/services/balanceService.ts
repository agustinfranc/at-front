import type Balance from "@/api/balance/interface";
import type BalanceApi from "@/api/balance";
import { ApiService, type ApiServiceResponse } from "./apiService";

export class BalanceService extends ApiService {
  constructor(private api: BalanceApi) {
    super(api);
  }
  async getClientsBalances(): Promise<ApiServiceResponse<Balance[]>> {
    return await this.handleRequest<Balance[]>(this.api.getClientBalances);
  }

  async getCompanionsBalances(): Promise<ApiServiceResponse<Balance[]>> {
    return await this.handleRequest<Balance[]>(this.api.getCompanionsBalances);
  }
}
