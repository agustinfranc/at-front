import type { AxiosResponse } from "axios";
import { ApiEngine } from "../engine";
import type Client from "./interface";

class ClientApi extends ApiEngine {
  static async get(): Promise<AxiosResponse<Client[]> | unknown> {
    return await super.request({ method: "get", path: "/clients" });
  }

  static async create(
    client: Client
  ): Promise<AxiosResponse<Client> | unknown> {
    return await super.request({
      method: "post",
      path: "/clients",
      data: client,
    });
  }
}

export default ClientApi;
