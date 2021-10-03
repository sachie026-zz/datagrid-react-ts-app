export interface PaginationProps {
  pageNumber: number;
  limit: number;
  totalCount: number;
  show: boolean;
  onNext: () => void;
  onPrev: () => void;
}

export interface TableRowActionProps {
  name: string;
  onAction: (data: any) => void;
}

export interface TableRowProps {
  [key: string]: any[];
}

export interface DataGridProps {
  pagination?: PaginationProps;
  columns: string[];
  columnLabels: string[];
  rows: any[];
  gridKey: string;
  tableRowActions?: TableRowActionProps[];
  pageLimitValues?: number[];
  selectedPageLimit?: number;
  noResultLabel?: string;
  loading?: boolean;
  editable?: boolean;
  onPageLimitChange: (newLimit: number) => void;
  onEditCellHandler?: (rowData: any) => void;
}

export interface DataGridContextProps {
  isEditingAnyCell?: boolean;
  updateIsEditingAnyCell?: (newState: boolean) => void;
}
