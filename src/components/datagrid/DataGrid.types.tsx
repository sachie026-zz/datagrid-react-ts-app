export interface PaginationProps {
  pageNumber: number;
  limit: number;
  totalCount: number;
  onNext: () => void;
  onPrev: () => void;
  show: boolean;
}

export interface TableRowActionProps {
  name: string;
  onAction: () => string;
}

export interface TableRowProps {
  [key: string]: any;
}

export interface DataGridProps {
  pagination?: PaginationProps;
  columns: string[];
  rows: TableRowProps;
  gridKey: string;
  tableRowActions?: TableRowActionProps[];
}
