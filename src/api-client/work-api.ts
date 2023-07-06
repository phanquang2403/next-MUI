import axiosClient from "./axios-client";

export const workApi = {
  getAll(
    params: Partial<API.IListParams>
  ): Promise<API.IListResponse<WorkApi.Work>> {
    return axiosClient.get("/works", { params });
  },
  get(id: string): Promise<WorkApi.Work> {
    return axiosClient.get(`/works.${id}`);
  },
};
