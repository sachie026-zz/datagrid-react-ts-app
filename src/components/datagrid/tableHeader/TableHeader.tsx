import React, { useContext } from "react";

import TableRow from "../tableRow";
import TableCell from "../tableCell";
import TableRowAction from "../tableRowAction";
import { DataGridContext } from "../DataGrid.context";
import { TableRowActionProps } from "../DataGrid.types";
import "./TableHeader.css";

interface OwnProps {
  gridKey: string;
  columns: string[];
  columnLabels: string[];
  tableRowActions?: TableRowActionProps[];
  onHeaderCellClick: (key: string) => void;
}

const TableHeader: React.FC<OwnProps> = ({
  gridKey,
  columns,
  columnLabels,
  tableRowActions,
  onHeaderCellClick,
}: OwnProps) => {
  const { isEditingAnyCell } = useContext(DataGridContext);
  return (
    <TableRow rowKey={`${gridKey}-rowheader`}>
      {columns.map(
        (column: string, index: number) =>
          // check if key is valid and not empty i.e. column &&
          column && (
            <TableCell
              key={`${gridKey}-cellheader${index}`}
              cellLabel={columnLabels[index]}
              cellValue={column}
              className={`table-cell-header ${
                isEditingAnyCell ? "action-less-container" : ""
              }`}
              onCellClick={onHeaderCellClick}
            />
          )
      )}
      {tableRowActions ? <TableRowAction hidden /> : null}
    </TableRow>
  );
};

export default React.memo(TableHeader);
