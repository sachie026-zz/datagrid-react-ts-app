import React from "react";

import TablePagination from "../tablePagination";
import TablePageLimit from "./TablePageLimit";
import { PaginationProps } from "../DataGrid.types";
import { PAGE_LIMIT, PAGE_LIMITS } from "../common/constants";
import "./TableFooter.css";

interface OwnProps {
  pagination?: PaginationProps;
  pageLimits?: number[];
  currentPageLimit?: number;
  updatePageLimit: (val: number) => void;
  onPageLimitChange: (val: number) => void;
}

const TableFooter: React.FC<OwnProps> = ({
  pagination,
  pageLimits,
  currentPageLimit,
  updatePageLimit,
  onPageLimitChange,
}: OwnProps) => {
  const updateSelectedPageLimit = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    updatePageLimit(parseInt(event.target.value));
    onPageLimitChange(parseInt(event.target.value));
  };

  return (
    <div className="table-footer-container">
      <TablePageLimit
        currentPageLimit={currentPageLimit || PAGE_LIMIT}
        pageLimits={pageLimits || PAGE_LIMITS}
        updateSelectedPageLimit={updateSelectedPageLimit}
      />
      {pagination && pagination?.show ? (
        <TablePagination pagination={pagination} />
      ) : null}
    </div>
  );
};

export default React.memo(TableFooter);
