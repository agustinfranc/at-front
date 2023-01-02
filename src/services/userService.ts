import type UserApi from "@/api/user";
import { ApiService } from "./apiService";
import type { DeleteService } from "./interfaces/DeleteService";
import type { FindService } from "./interfaces/FindService";

export class UserService
  extends ApiService
  implements DeleteService, FindService
{
  constructor(private api: UserApi) {
    super(api);
  }
}
