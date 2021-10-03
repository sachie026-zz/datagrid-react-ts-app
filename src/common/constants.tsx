export const BASE_URL = "https://datagrid-server.herokuapp.com/v1";
export const CUSTOMER_URL = "customers";
export const HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const DEFAULT_PAGE_NUMBER = 1;
export const DEFAULT_PAGE_LIMIT = 5;
export const CUSTOMER_TABLE_COLUMN_KEYS = [
  "name",
  "due_amount",
  "total_products",
];
export const CUSTOMER_TABLE_COLUMN_LABELS = [
  "Name",
  "Due Amount [$]",
  "Total Products",
];
export const GRID_PAGE_LIMIT_VALUES = [5, 10, 15];
