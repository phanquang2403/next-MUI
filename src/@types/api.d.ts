declare namespace API {
  interface IPagination {
    _page: number;
    _limit: number;
    _total: number;
  }

  interface IListResponse<T> {
    data: Array<T>;
    pagination: IPagination;
  }

  interface IListParams {
    _page: number;
    _limit: number;
    title_like: string;
  }
}
