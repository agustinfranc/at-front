import axiosInstance from "@/plugins/axios";
import type { AxiosError, AxiosResponse } from "axios";
import type Client from "./interface";

class ClientApi {
  static async get(): Promise<AxiosResponse<Client[]> | unknown> {
    try {
      return await axiosInstance.get("/clients");
    } catch (error: unknown | AxiosError) {
      return error;
    }
  }

  static async post(
    client: Client
  ): Promise<AxiosResponse<Client[]> | unknown> {
    try {
      return await axiosInstance.post("/clients", client);
    } catch (error: unknown | AxiosError) {
      return error;
    }
  }
}

export default ClientApi;
