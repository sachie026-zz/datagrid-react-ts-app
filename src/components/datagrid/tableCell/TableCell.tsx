import React from "react";

interface OwnProps {
  cellKey: string;
  cellValue: string;
}

const TableCell: React.FC<OwnProps> = ({ cellKey, cellValue }: OwnProps) => {
  return (
    <div key={cellKey} className="table-cell">
      {cellValue}
    </div>
  );
};

export default TableCell;
