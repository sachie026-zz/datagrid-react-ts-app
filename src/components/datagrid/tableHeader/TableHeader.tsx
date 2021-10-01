import React from "react";

import TableRow from "../tableRow";
import TableCell from "../tableCell";
import TableRowAction from "../tableRowAction";
import { TableRowActionProps } from "../DataGrid.types";

interface OwnProps {
  gridKey: string;
  columns: string[];
  tableRowActions?: TableRowActionProps[];
}

const TableHeader: React.FC<OwnProps> = ({
  gridKey,
  columns,
  tableRowActions,
}: OwnProps) => {
  return (
    <TableRow rowKey={`${gridKey}-rowheader`}>
      {columns.map((column: string, index: number) => (
        <TableCell
          key={`${gridKey}-cellheader${index}`}
          cellValue={column}
          className="table-cell-header"
        />
      ))}
      {true ? <TableRowAction hidden /> : null}
    </TableRow>
  );
};

export default TableHeader;
