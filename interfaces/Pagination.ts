export interface Pagination<T> {
  result: Array<T>;
  total: number;
  hasMore: boolean;
}

export interface PaginationRequest {
  page: number;
  size: number;
  search: string;
}

export interface PaginationResult {
  page: number;
  size: number;
  search: string;
  hasMore: boolean;
  isFetching: boolean;
}
