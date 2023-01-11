import axiosInstance from "@/plugins/axios";
import type { AxiosPromise } from "axios";
import type Balance from "./interface";

class BalanceApi {
  getClientBalances(): AxiosPromise<Balance[]> {
    return axiosInstance.get("balances/clients");
  }

  getCompanionsBalances(): AxiosPromise<Balance[]> {
    return axiosInstance.get("balances/companions");
  }
}

export default BalanceApi;
