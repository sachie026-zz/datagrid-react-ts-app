import React from "react";

import { PaginationProps } from "../DataGrid.types";

interface OwnProps {
  pagination: PaginationProps;
}

const TablePagination: React.FC<OwnProps> = ({ pagination }: OwnProps) => {
  const { totalCount, pageNumber, limit, onPrev, onNext } = pagination;

  const firstRowIndex = (pageNumber - 1) * limit + 1;
  const lastRowIndex = pageNumber * limit;

  return (
    <div>
      <div>
        <button onClick={onPrev}>Prev</button>
        <button onClick={onNext}>Next</button>
      </div>
      {`${firstRowIndex}-${lastRowIndex} of ${totalCount}`}
    </div>
  );
};

export default TablePagination;
