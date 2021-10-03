import React, { useCallback } from "react";

import TableRow from "../tableRow";
import TableCell from "../tableCell";
import TableRowAction from "../tableRowAction";
import { TableRowActionProps } from "../DataGrid.types";

interface OwnProps {
  rows: any;
  gridKey: string;
  columns: string[];
  tableRowActions?: TableRowActionProps[];
  editable?: boolean;
  onEditCellHandler?: (rowData: any) => void;
}

const TableBody: React.FC<OwnProps> = ({
  rows,
  gridKey,
  columns,
  tableRowActions,
  editable,
  onEditCellHandler,
}: OwnProps) => {
  const updateCellContent = useCallback(
    (
      rindex: number | undefined,
      cindex: number | undefined,
      data: any,
      columnKey: string
    ) => {
      if (rindex !== undefined && cindex !== undefined && onEditCellHandler) {
        const selectedRowData = rows[rindex];
        selectedRowData[columnKey] = data;
        onEditCellHandler(selectedRowData);
      }
    },
    [rows, onEditCellHandler]
  );

  return rows?.map((rowData: any, rindex: number) => (
    <TableRow
      key={`tablebodyrow-${gridKey}-row${rindex}`}
      rowKey={`${gridKey}-row${rindex}`}
    >
      {columns.map(
        (column: string, cindex: number) =>
          // check if key is valid and not empty i.e. column &&
          column && (
            <TableCell
              key={`tablebodycell${gridKey}-cell${rindex}${cindex}`}
              rindex={rindex}
              cindex={cindex}
              cellValue={rowData[column]}
              columnKey={column}
              editable={editable}
              updateCellContent={updateCellContent}
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
