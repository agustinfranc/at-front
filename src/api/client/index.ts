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

  update(client: Client): AxiosPromise<Client> {
    return axiosInstance.put(`/clients/${client.id}`, client);
  }

  delete(id: number): AxiosPromise<boolean> {
    return axiosInstance.delete(`/clients/${id}`);
  }
}

export default ClientApi;
