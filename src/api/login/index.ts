import type { AxiosPromise } from "axios";
import axiosInstance from "@/plugins/axios";
import type Login from "./interface";

class LoginApi {
  login(login: Login): AxiosPromise<Login> {
    return axiosInstance.post("/token", login);
  }

  logout(login: Login): AxiosPromise<Login> {
    return axiosInstance.post("/logout", login);
  }
}

export default LoginApi;
