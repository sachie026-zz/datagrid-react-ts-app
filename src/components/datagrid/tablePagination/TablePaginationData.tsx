import React from "react";

interface OwnProps {
  firstRowIndex: number;
  lastRowIndex: number;
  totalCount: number;
}

const TablePaginationData: React.FC<OwnProps> = ({
  firstRowIndex,
  lastRowIndex,
  totalCount,
}: OwnProps) => {
  return (
    <div className="pagination-data">
      <span className="pagination-data-index">{`${firstRowIndex} to ${lastRowIndex} `}</span>
      <span className="pagination-data-total">{`of ${totalCount} rows`}</span>
    </div>
  );
};

export default React.memo(TablePaginationData);
