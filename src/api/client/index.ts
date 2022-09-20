import type { AxiosPromise } from "axios";
import type Client from "./interface";
import axiosInstance from "@/plugins/axios";

class ClientApi {
  getAll(): AxiosPromise<Client[]> {
    return axiosInstance.get("/clients");
  }

  getOne(): AxiosPromise<Client[]> {
    return axiosInstance.get("/clients");
  }

  create(client: Client): AxiosPromise<Client> {
    return axiosInstance.post("/clients", client);
  }
}

export default ClientApi;
