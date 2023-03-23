import axiosInstance from "@/plugins/axios";

export class TokenSingleton {
  private static instance: TokenSingleton;

  public static getInstance(): TokenSingleton {
    if (!TokenSingleton.instance) {
      TokenSingleton.instance = new TokenSingleton();
    }

    return TokenSingleton.instance;
  }

  public static setToken(token: string) {
    axiosInstance.defaults.headers.common = {
      Authorization: `Bearer ${token}`,
    };
  }
}
