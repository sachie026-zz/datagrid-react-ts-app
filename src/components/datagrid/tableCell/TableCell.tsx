import React from "react";

import "./TableCell.css";

interface OwnProps {
  cellValue: string;
  className?: string;
  onCellClick?: (key: string) => void;
  cellLabel?: string;
}

const TableCell: React.FC<OwnProps> = ({
  cellValue,
  className,
  onCellClick,
  cellLabel,
}: OwnProps) => {
  const onClickHandler = () => {
    if (onCellClick) onCellClick(cellValue);
  };
  return (
    <div className={className || `table-cell`} onClick={onClickHandler}>
      {/* cellLabel is used to show the header labels */}
      {cellLabel || cellValue}
    </div>
  );
};

export default React.memo(TableCell);
