import React from "react";

interface OwnProps {
  onPrev: () => void;
  onNext: () => void;
}

const TablePaginationAction: React.FC<OwnProps> = ({
  onPrev,
  onNext,
}: OwnProps) => {
  return (
    <div className="pagination-actions">
      <button onClick={onPrev}>Prev</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default TablePaginationAction;
