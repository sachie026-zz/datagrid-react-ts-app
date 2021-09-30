import React from "react";

import TableRow from "./tableRow";
import TableCell from "./tableCell";
import "./DataGrid.css";

interface RowOriginalProps {
  id?: string;
}

interface RowProps extends RowOriginalProps {
  [key: string]: any;
}

interface OwnProps {
  pagination?: boolean;
  columns?: string[];
  pageSize?: number;
  rows?: RowProps;
  gridKey: string;
}

const DataGrid: React.FC<OwnProps> = ({
  pagination,
  columns,
  rows,
  gridKey,
}: OwnProps) => {
  return (
    <div className="table">
      {rows?.map((rowData: any, rindex: number) => (
        <TableRow rowKey={`${gridKey}-row${rindex}`}>
          {Object.keys(rowData).map((column, cindex: number) => (
            <TableCell
              cellKey={`${gridKey}-cell${cindex}`}
              cellValue={rowData[column]}
            />
          ))}
        </TableRow>
      ))}
    </div>
  );
};

export default React.memo(DataGrid);
