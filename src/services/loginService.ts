import type LoginApi from "@/api/login";
import type Login from "@/api/login/interface";
import { ApiService, type ApiServiceResponse } from "./apiService";

export class LoginService extends ApiService {
  constructor(private api: LoginApi) {
    super(api);
  }

  async login(login: Login): Promise<ApiServiceResponse<Login>> {
    return await this.handleRequest<Login>(this.api.login);
  }
}
