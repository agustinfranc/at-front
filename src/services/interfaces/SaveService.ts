import type { ApiServiceResponse } from "../apiService";

export interface SaveService {
  create<T extends object>(item: T): Promise<ApiServiceResponse<T>>;

  update<T extends object>(item: T): Promise<ApiServiceResponse<T>>;
}
