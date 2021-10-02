import React from "react";

import TableCellEditableInput from "./TableCellEditableInput";
import "./TableCell.css";

interface OwnProps {
  cellValue: string;
  className?: string;
  cellLabel?: string;
  editable?: boolean;
  rindex?: number;
  cindex?: number;
  columnKey?: string;
  onCellClick?: (key: string) => void;
  updateCellContent?: (
    rindex: number | undefined,
    cindex: number | undefined,
    data: string,
    columnKey: string
  ) => void;
}

const TableCell: React.FC<OwnProps> = ({
  cellValue,
  className,
  cellLabel,
  editable,
  rindex,
  cindex,
  columnKey,
  onCellClick,
  updateCellContent,
}: OwnProps) => {
  const [editing, setEditing] = React.useState(false);

  const onClickHandler = () => {
    if (onCellClick) onCellClick(cellValue);
  };

  const onCellDoubleClick = () => {
    if (editable) {
      setEditing(true);
    }
  };

  const onCancel = () => {
    setEditing(false);
  };

  const onSaveClick = (updatedCellValue: any) => {
    if (updateCellContent)
      updateCellContent(rindex, cindex, updatedCellValue, columnKey || "");
    onCancel();
  };

  return (
    <div
      className={className || `table-cell`}
      onClick={onClickHandler}
      onDoubleClick={onCellDoubleClick}
    >
      {/* cellLabel is used to show the header labels */}
      {!editing && (cellLabel || cellValue)}
      {editing ? (
        <TableCellEditableInput
          cellCurrentValue={cellValue}
          onSaveClick={onSaveClick}
          onCancel={onCancel}
        />
      ) : null}
    </div>
  );
};

export default TableCell;
