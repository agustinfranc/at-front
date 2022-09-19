import type { AxiosResponse } from "axios";
import { ApiEngine } from "../engine";
import type Companion from "./interface";

class CompanionApi extends ApiEngine {
  static async get(): Promise<AxiosResponse<Companion[]> | unknown> {
    return await super.request({ method: "get", path: "/companions" });
  }

  static async create(
    companion: Companion
  ): Promise<AxiosResponse<Companion> | unknown> {
    return await super.request({
      method: "post",
      path: "/companions",
      data: companion,
    });
  }
}

export default CompanionApi;
