import type { AxiosPromise } from "axios";
import type Companion from "./interface";
import axiosInstance from "@/plugins/axios";

class CompanionApi {
  getAll(): AxiosPromise<Companion[]> {
    return axiosInstance.get("/companions");
  }

  getOne(): AxiosPromise<Companion[]> {
    return axiosInstance.get("/companions");
  }

  create(companion: Companion): AxiosPromise<Companion> {
    return axiosInstance.post("/companions", companion);
  }
}

export default CompanionApi;
