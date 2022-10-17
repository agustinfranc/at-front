import type CompanionApi from "@/api/companion";
import type Companion from "@/api/companion/interface";
import { ApiService, type ApiServiceResponse } from "./apiService";
import type { DeleteService } from "./interfaces/DeleteService";
import type { FindService } from "./interfaces/FindService";

export class CompanionService
  extends ApiService
  implements DeleteService, FindService
{
  constructor(private api: CompanionApi) {
    super(api);
  }
}
