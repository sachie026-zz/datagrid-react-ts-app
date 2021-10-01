import React from "react";

import TablePagination from "../tablePagination";
import { PaginationProps } from "../DataGrid.types";
import { PAGE_LIMIT } from "../common/contants";
import "./TableFooter.css";

interface OwnProps {
  pagination?: PaginationProps;
  pageLimits?: number[];
  currentPageLimit?: number;
  updatePageLimit: (val: number) => void;
  onPageLimitChange: (val: number) => void;
}

interface OwnProps {}

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
      <select
        value={currentPageLimit || PAGE_LIMIT}
        onChange={updateSelectedPageLimit}
      >
        {pageLimits?.map((limit) => (
          <option>{limit}</option>
        ))}
      </select>
      {pagination && pagination?.show ? (
        <TablePagination pagination={pagination} />
      ) : null}
    </div>
  );
};

export default React.memo(TableFooter);
