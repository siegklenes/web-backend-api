export type FilterFn = (value: string|string[], item: any) => boolean;

export type FilterOp =
  | 'eq' // Equal
  | 'ne' // Not equal
  | 'gt' // Greater than
  | 'ge' // Greater than or equal
  | 'lt' // Less than
  | 'le' // Less than or equal
  ;

export type FieldFn = (item: any) => boolean;

export interface IQuickFilter {
  term: string;
  fields: string[];
}

export interface IQueryFilter {
  name: string;
  rx?: RegExp;
  fn?: FieldFn;
  or?: boolean;
}

export interface IQueryParams {
  count: number;
  page?: number;
  pageSize?: number;
  conditions?: Array<IQueryFilter>;
}

export interface IQueryResult {
  hasNext: boolean;
  items: Array<any>;
}

export interface IQueryCursor {
  value: any;
  continue(): void;
}
