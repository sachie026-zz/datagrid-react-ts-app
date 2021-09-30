export interface PaginationProps {
  pageNumber: number;
  limit: number;
  totalCount: number;
  onNext: () => void;
  onPrev: () => void;
}

export interface TableRowProps {
  [key: string]: any;
}

export interface DataGridProps {
  pagination?: PaginationProps;
  columns: string[];
  pageSize?: number;
  rows?: TableRowProps;
  gridKey: string;
}
