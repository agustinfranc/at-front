import type CompanionApi from "@/api/companion";
import { ApiService } from "./apiService";
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
