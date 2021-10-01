import React from "react";

import Table from "./table";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import TablePagination from "./tablePagination";
import { DataGridProps } from "./DataGrid.types";
import "./DataGrid.css";

const DataGrid: React.FC<DataGridProps> = ({
  pagination,
  columns,
  rows,
  gridKey,
  tableRowActions,
}: DataGridProps) => {
  return (
    <div className="table-container">
      <Table>
        <TableHeader
          columns={columns}
          gridKey={gridKey}
          tableRowActions={tableRowActions}
        />
        <TableBody
          columns={columns}
          rows={rows}
          gridKey={gridKey}
          tableRowActions={tableRowActions}
        />
      </Table>
      {pagination && pagination?.show ? (
        <TablePagination pagination={pagination} />
      ) : null}
    </div>
  );
};

export default React.memo(DataGrid);
