import type Balance from "@/api/balance/interface";
import type BalanceApi from "@/api/balance";
import { ApiService, type ApiServiceResponse } from "./apiService";

export class CompanionBalanceService extends ApiService {
  constructor(private api: BalanceApi) {
    super(api);
  }

  async getBalances(): Promise<ApiServiceResponse<Balance[]>> {
    return await this.handleRequest<Balance[]>(this.api.getCompanionsBalances);
  }
}
