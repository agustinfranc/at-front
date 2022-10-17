import type { ApiServiceResponse } from "../apiService";

export interface DeleteService {
  delete(id: number): Promise<ApiServiceResponse<boolean>>;
}
