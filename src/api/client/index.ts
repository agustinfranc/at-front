import type { AxiosPromise } from "axios";
import type Client from "./interface";
import axiosInstance from "@/plugins/axios";

class ClientApi {
  getAll(): AxiosPromise<Client[]> {
    return axiosInstance.get("/clients");
  }

  getOne(id: number): AxiosPromise<Client> {
    return axiosInstance.get(`/clients/${id}`);
  }

  create(client: Client): AxiosPromise<Client> {
    return axiosInstance.post("/clients", client);
  }
}

export default ClientApi;
