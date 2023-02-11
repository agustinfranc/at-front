import type { AxiosPromise } from "axios";
import axiosInstance from "@/plugins/axios";
import type Login from "./interface";

class LoginApi {
  login(login: Login): AxiosPromise<Login> {
    return axiosInstance.post("/login", login);
  }
}

export default LoginApi;