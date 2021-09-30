import React from "react";

import TableRow from "./tableRow";
import TableCell from "./tableCell";
import { DataGridProps } from "./DataGrid.types";
import "./DataGrid.css";

const DataGrid: React.FC<DataGridProps> = ({
  pagination,
  columns,
  rows,
  gridKey,
}: DataGridProps) => {
  return (
    <div className="table">
      <TableRow rowKey={`${gridKey}-rowheader`}>
        {columns.map((column: string, index: number) => (
          <TableCell
            cellKey={`${gridKey}-cellheader${index}`}
            cellValue={column}
          />
        ))}
      </TableRow>
      {rows?.map((rowData: any, rindex: number) => (
        <TableRow rowKey={`${gridKey}-row${rindex}`}>
          {columns.map((column, cindex: number) => (
            <TableCell
              cellKey={`${gridKey}-cell${rindex}${cindex}`}
              cellValue={rowData[column]}
            />
          ))}
        </TableRow>
      ))}
    </div>
  );
};

export default React.memo(DataGrid);
