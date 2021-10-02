import React from "react";

import TableRow from "../tableRow";
import TableCell from "../tableCell";
import TableRowAction from "../tableRowAction";
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
  return (
    <TableRow rowKey={`${gridKey}-rowheader`}>
      {columns.map(
        (column: string, index: number) =>
          // check if key is valid and not empty i.e. column &&
          column && (
            <TableCell
              key={`${gridKey}-cellheader${index}`}
              cellValue={columnLabels[index]}
              className="table-cell-header"
              onCellClick={onHeaderCellClick}
            />
          )
      )}
      {TableRowAction ? <TableRowAction hidden /> : null}
    </TableRow>
  );
};

export default React.memo(TableHeader);
