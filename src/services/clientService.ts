import type ClientApi from "@/api/client";
import { ApiService, type ApiServiceResponse } from "./apiService";
import type { DeleteService } from "./interfaces/DeleteService";
import type { FindService } from "./interfaces/FindService";

export class ClientService
  extends ApiService
  implements DeleteService, FindService
{
  constructor(private api: ClientApi) {
    super(api);
  }
}
