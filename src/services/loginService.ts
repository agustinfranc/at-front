import type LoginApi from "@/api/login";
import type Login from "@/api/login/interface";
import { ApiService, type ApiServiceResponse } from "./apiService";

export class LoginService extends ApiService {
  constructor(private api: LoginApi) {
    super(api);
  }

  async login(login: Login): Promise<ApiServiceResponse<{ token: string }>> {
    return await this.handleRequest<{ token: string }>(this.api.login, {
      ...login,
    });
  }

  async logout(): Promise<ApiServiceResponse<null>> {
    return await this.handleRequest<null>(this.api.logout);
  }
}
