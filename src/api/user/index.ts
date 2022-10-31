import type { AxiosPromise } from "axios";
import type User from "../user/interface";
import axiosInstance from "@/plugins/axios";

class UserApi {
  getAll(): AxiosPromise<User[]> {
    return axiosInstance.get("/users");
  }

  getOne(id: number): AxiosPromise<User[]> {
    return axiosInstance.get(`/users/${id}`);
  }

  create(user: User): AxiosPromise<User> {
    return axiosInstance.post("/users", user);
  }

  update(user: User): AxiosPromise<User> {
    return axiosInstance.put(`/users/${user.id}`, user);
  }

  delete(id: number): AxiosPromise<boolean> {
    return axiosInstance.delete(`/users/${id}`);
  }
}

export default UserApi;
