import React from "react";

import TableRow from "../tableRow";
import TableCell from "../tableCell";
import TableRowAction from "../tableRowAction";
import { TableRowActionProps } from "../DataGrid.types";
import "./TableHeader.css";

interface OwnProps {
  gridKey: string;
  columns: string[];
  tableRowActions?: TableRowActionProps[];
  onHeaderCellClick: (key: string) => void;
}

const TableHeader: React.FC<OwnProps> = ({
  gridKey,
  columns,
  tableRowActions,
  onHeaderCellClick,
}: OwnProps) => {
  return (
    <thead>
      <TableRow rowKey={`${gridKey}-rowheader`}>
        {columns.map(
          (column: string, index: number) =>
            // check if key is valid and not empty i.e. column &&
            column && (
              <TableCell
                key={`${gridKey}-cellheader${index}`}
                cellValue={column}
                className="table-cell-header"
                onCellClick={onHeaderCellClick}
              />
            )
        )}
        {true ? <TableRowAction hidden /> : null}
      </TableRow>
    </thead>
  );
};

export default React.memo(TableHeader);
