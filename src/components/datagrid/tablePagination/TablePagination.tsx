import React from "react";

import TablePaginationAction from "./TablePaginationAction";
import TablePaginationData from "./TablePaginationData";
import { PaginationProps } from "../DataGrid.types";
import "./TablePagination.css";

interface OwnProps {
  pagination: PaginationProps;
}

const TablePagination: React.FC<OwnProps> = ({ pagination }: OwnProps) => {
  const { totalCount, pageNumber, limit, onPrev, onNext } = pagination;

  const firstRowIndex = (pageNumber - 1) * limit + 1;
  const lastRowIndex = pageNumber * limit;

  return (
    <div className="pagination-row">
      {!!totalCount && (
        <>
          <TablePaginationAction onPrev={onPrev} onNext={onNext} />
          <TablePaginationData
            firstRowIndex={firstRowIndex}
            lastRowIndex={lastRowIndex}
            totalCount={totalCount}
          />
        </>
      )}
    </div>
  );
};

export default React.memo(TablePagination);
