import React, { useEffect } from "react";

import Table from "./table";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import TablePagination from "./tablePagination";
import useDataGridhooks from "./DataGrid.hooks";
import { DataGridProps } from "./DataGrid.types";
import "./DataGrid.css";

const DataGrid: React.FC<DataGridProps> = ({
  pagination,
  columns,
  rows,
  gridKey,
  tableRowActions,
}: DataGridProps) => {
  const { tableRows, sortTableRows, updateTableRows } = useDataGridhooks(rows);

  useEffect(() => {
    updateTableRows(rows);
  }, [rows]);

  useEffect(() => {
    console.log("useeffetc tableRows", tableRows);
  }, [tableRows]);

  return (
    <div className="table-container">
      <Table>
        <TableHeader
          columns={columns}
          gridKey={gridKey}
          onHeaderCellClick={sortTableRows}
          tableRowActions={tableRowActions}
        />
        <TableBody
          columns={columns}
          rows={tableRows}
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
