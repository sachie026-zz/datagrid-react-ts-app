import React from "react";

interface OwnProps {
  cellValue: string;
  className?: string;
}

const TableCell: React.FC<OwnProps> = ({
  cellValue,
  className = "",
}: OwnProps) => {
  return (
    <td>
      <div className={`table-cell ${className}`}>{cellValue}</div>
    </td>
  );
};

export default TableCell;
