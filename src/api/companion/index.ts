import type { AxiosPromise } from "axios";
import type Companion from "./interface";
import axiosInstance from "@/plugins/axios";

class CompanionApi {
  getAll(): AxiosPromise<Companion[]> {
    return axiosInstance.get("/companions");
  }

  getOne(id: number): AxiosPromise<Companion> {
    return axiosInstance.get(`/companions/${id}`);
  }

  create(companion: Companion): AxiosPromise<Companion> {
    return axiosInstance.post("/companions", companion);
  }

  update(companion: Companion): AxiosPromise<Companion> {
    return axiosInstance.put(`/companions/${companion.id}`, companion);
  }

  delete(id: number): AxiosPromise<boolean> {
    return axiosInstance.delete(`/companions/${id}`);
  }
}

export default CompanionApi;
