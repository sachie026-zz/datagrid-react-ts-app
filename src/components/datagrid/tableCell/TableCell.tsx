import React from "react";

interface OwnProps {
  cellValue: string;
}

const TableCell: React.FC<OwnProps> = ({ cellValue }: OwnProps) => {
  return <div className="table-cell">{cellValue}</div>;
};

export default TableCell;
