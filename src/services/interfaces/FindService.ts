import type { ApiServiceResponse } from "../apiService";

export interface FindService {
  find(): Promise<ApiServiceResponse<any[]>>;
}
