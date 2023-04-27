import type { AxiosPromise } from "axios";
import axiosInstance from "@/plugins/axios";
import type Login from "./interface";

class LoginApi {
  login(login: Login): AxiosPromise<Login> {
    return axiosInstance.post("/token", login);
  }

  logout(): AxiosPromise<Login> {
    return axiosInstance.post("/logout");
  }
}

export default LoginApi;
