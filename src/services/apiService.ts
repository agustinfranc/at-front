import type { AxiosError, AxiosPromise } from "axios";
import { useSnackbarStore } from "@/stores/snackbar";
import type { DeleteService } from "./interfaces/DeleteService";
import type { FindService } from "./interfaces/FindService";
import type { SaveService } from "./interfaces/SaveService";

export interface ApiServiceResponse<T, D = ErrorApiServiceResponse> {
  data?: { data: T };
  error?: AxiosError<D>;
}

interface ErrorApiServiceResponse {
  message?: string;
  errors?: { [key: string]: string | string[] };
}

export abstract class ApiService
  implements DeleteService, FindService, SaveService
{
  constructor(private _api: any, private snackbarStore = useSnackbarStore()) {}

  async find<T = any>(): Promise<ApiServiceResponse<T[]>> {
    return await this.handleRequest<T[]>(this._api.getAll);
  }

  async findOne<T>(id: number): Promise<ApiServiceResponse<T>> {
    return await this.handleRequest<T>(this._api.getOne, id);
  }

  async create<T extends object>(item: T): Promise<ApiServiceResponse<T>> {
    return await this.handleRequest<T>(this._api.create, {
      ...item,
    });
  }

  async update<T extends object>(item: T): Promise<ApiServiceResponse<T>> {
    return await this.handleRequest<T>(this._api.update, {
      ...item,
    });
  }

  async delete(id: number): Promise<ApiServiceResponse<boolean>> {
    return await this.handleRequest<boolean>(this._api.delete, id);
  }

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
