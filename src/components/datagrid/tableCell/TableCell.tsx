import React, { useContext, useCallback } from "react";

import TableCellEditableInput from "./TableCellEditableInput";
import { DataGridContext } from "../DataGrid.context";
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
  const { updateIsEditingAnyCell } = useContext(DataGridContext);
  const [editing, setEditing] = React.useState(false);

  const updateEditingContext = (newState: boolean) => {
    if (updateIsEditingAnyCell) updateIsEditingAnyCell(newState);
  };

  const onClickHandler = () => {
    if (onCellClick) onCellClick(cellValue);
  };

  const onCellDoubleClick = () => {
    if (editable) {
      setEditing(true);
      updateEditingContext(true);
    }
  };

  const onCancel = useCallback(() => {
    setEditing(false);
    updateEditingContext(false);
  }, [updateEditingContext]);

  const onSaveClick = useCallback(
    (updatedCellValue: any) => {
      if (updateCellContent)
        updateCellContent(rindex, cindex, updatedCellValue, columnKey || "");
      onCancel();
    },
    [updateCellContent]
  );

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

export default React.memo(TableCell);
