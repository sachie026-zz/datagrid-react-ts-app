import React from "react";

import TableRow from "../tableRow";
import TableCell from "../tableCell";
import TableRowAction from "../tableRowAction";
import { TableRowProps, TableRowActionProps } from "../DataGrid.types";

interface OwnProps {
  rows: any;
  gridKey: string;
  columns: string[];
  tableRowActions?: TableRowActionProps[];
}

const TableBody: React.FC<OwnProps> = ({
  rows,
  gridKey,
  columns,
  tableRowActions,
}: OwnProps) => {
  return rows?.map((rowData: any, rindex: number) => (
    <TableRow
      key={`tablebodyrow-${gridKey}-row${rindex}`}
      rowKey={`${gridKey}-row${rindex}`}
    >
      {columns.map(
        (column, cindex: number) =>
          // check if key is valid and not empty i.e. column &&
          column && (
            <TableCell
              key={`tablebodycell${gridKey}-cell${rindex}${cindex}`}
              cellValue={rowData[column]}
            />
          )
      )}
      {tableRowActions ? (
        <TableRowAction
          tableRowActions={tableRowActions}
          keyIndex={rindex}
          rowData={rowData}
        />
      ) : null}
    </TableRow>
  ));
};

export default React.memo(TableBody);
