import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  CreateAxiosDefaults,
} from "axios";

export class AxiosClient {
  private readonly instance: AxiosInstance;

  public constructor(config: CreateAxiosDefaults = {}) {
    const isBrowser = typeof window !== "undefined";

    const headers: CreateAxiosDefaults["headers"] = {
      "Content-Type": "application/json",
      Accept: "application/json;q=0.9,*/*;q=0.8",
      ...config.headers,
    };

    // @ts-expect-error `User-Agent` is part of `headers`
    if (isBrowser && headers?.["User-Agent"])
      throw new Error(
        "User-Agent header must not be modified in browser environments",
      );

    // @ts-expect-error `User-Agent` is part of `headers`
    if (!isBrowser && !headers?.["User-Agent"])
      throw new Error(
        "User-Agent header is required in non-browser environments",
      );

    this.instance = axios.create({
      baseURL: config.baseURL || "https://api.scryfall.com",
      timeout: config.timeout || 10000,
      headers,
    });
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.get<T>(url, config);
    return response.data;
  }

  public async post<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await this.instance.post<T>(url, data, config);
    return response.data;
  }

  public async put<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await this.instance.put<T>(url, data, config);
    return response.data;
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.delete<T>(url, config);
    return response.data;
  }
}
