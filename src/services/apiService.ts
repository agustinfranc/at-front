import type { AxiosError, AxiosPromise } from "axios";
import { useSnackbarStore } from "@/stores/snackbar";

export interface ApiServiceResponse<T, D = ErrorApiServiceResponse> {
  data?: T;
  error?: AxiosError<D>;
}

interface ErrorApiServiceResponse {
  message?: string;
  errors?: any;
}

export abstract class ApiService {
  constructor(private snackbarStore = useSnackbarStore()) {}

  protected async handleRequest<T>(
    request: { (param: any): AxiosPromise },
    payload = {}
  ): Promise<ApiServiceResponse<T>> {
    try {
      return await request(payload);
    } catch (e: unknown) {
      const error = e as AxiosError<ErrorApiServiceResponse>;

      this.snackbarStore.showError({
        text: error?.response?.data?.message || error?.message,
      });

      return { error };
    }
  }
}
