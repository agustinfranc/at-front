import axiosInstance from "@/plugins/axios";
import type { AxiosError, AxiosResponse, Method } from "axios";

export abstract class ApiEngine {
  static async request({
    method,
    path,
    params,
    data,
  }: {
    method: Method;
    path: string;
    params?: undefined;
    data?: unknown;
  }): Promise<AxiosResponse | unknown> {
    try {
      // return await axiosInstance.call(method, path, { params, data });

      switch (method) {
        case "get":
          return await axiosInstance.get(path, params);
        case "post":
          return await axiosInstance.post(path, data);
      }
    } catch (error: unknown | AxiosError) {
      return error;
    }
  }
}
