import React from "react";

interface OwnProps {
  cellValue: string;
  className?: string;
  onCellClick?: (key: string) => void;
}

const TableCell: React.FC<OwnProps> = ({
  cellValue,
  className,
  onCellClick,
}: OwnProps) => {
  const onClickHandler = () => {
    if (onCellClick) onCellClick(cellValue);
  };
  return (
    <div className={className || `table-cell`} onClick={onClickHandler}>
      {cellValue}
    </div>
  );
};

export default React.memo(TableCell);
