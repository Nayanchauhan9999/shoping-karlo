import axios, { AxiosInstance } from "axios";

interface IApiClient {
  get<TResponse>(path: string): Promise<TResponse>;
  post<TRequest, TResponse>(
    path: string,
    reqBody: TRequest
  ): Promise<TResponse>;
  patch<TRequest, TResponse>(
    path: string,
    reqBody: TRequest
  ): Promise<TResponse>;
  delete<TResponse>(path: string): Promise<TResponse>;
}

export default class ApiClient implements IApiClient {
  private client: AxiosInstance;
  protected createAxiosClient(): AxiosInstance {
    return axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_LINK,
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      withCredentials: true,
    });
  }
  constructor() {
    this.client = this.createAxiosClient();
  }
  async get<TResponse>(path: string): Promise<TResponse> {
    const response = await this.client.get(path);
    return response.data;
  }

  async post<TRequest, TResponse>(
    path: string,
    reqBody: TRequest
  ): Promise<TResponse> {
    const response = await this.client.post(path, reqBody);
    return response.data;
  }

  async patch<TRequest, TResponse>(
    path: string,
    reqBody: TRequest
  ): Promise<TResponse> {
    try {
      const response = await this.client.patch(path, reqBody);
      return response.data;
    } catch (error) {
      console.log(error);
    }
    return {} as TResponse;
  }
  async delete<TResponse>(path: string): Promise<TResponse> {
    try {
      const response = await this.client.delete(path);
      return response.data;
    } catch (error) {
      console.log(error);
    }
    return {} as TResponse;
  }
}
