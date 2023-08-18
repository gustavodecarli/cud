import { PaginationResult } from './Pagination';

export interface CRUDState<T> {
  data: Array<T>;
  pagination: PaginationResult;
  element?: T;
}
