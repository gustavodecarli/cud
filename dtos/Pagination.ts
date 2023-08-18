export interface Pagination<T> {
  result: Array<T>;
  total: number;
  hasMore: boolean;
}
