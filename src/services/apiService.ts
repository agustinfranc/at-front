import type { AxiosError, AxiosPromise } from "axios";

export interface ApiServiceResponse<T, D = ErrorApiServiceResponse> {
  data?: T;
  error?: AxiosError<D>;
}

interface ErrorApiServiceResponse {
  message?: string;
  errors?: any;
}

export abstract class ApiService {
  constructor() {
    // declare pinia here
  }

  protected async handleRequest<T>(
    request: { (param: any): AxiosPromise },
    payload = {}
  ): Promise<ApiServiceResponse<T>> {
    try {
      return await request(payload);
    } catch (error: unknown) {
      console.log(error);
      // dispatch message with pinia
      return { error } as { error: AxiosError<ErrorApiServiceResponse> };
    }
  }
}
