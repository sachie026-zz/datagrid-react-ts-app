import React, { useEffect } from "react";

import Table from "./table";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import TablePagination from "./tablePagination";
import TableFooter from "./tableFooter";
import useDataGridhooks from "./DataGrid.hooks";
import { DataGridProps } from "./DataGrid.types";
import "./DataGrid.css";

const DataGrid: React.FC<DataGridProps> = ({
  pagination,
  columns,
  rows,
  gridKey,
  tableRowActions,
  pageLimitValues,
  selectedPageLimit,
  onPageLimitChange,
}: DataGridProps) => {
  const {
    tableRows,
    sortTableRows,
    updateTableRows,
    pageLimit,
    updatePageLimit,
  } = useDataGridhooks(rows, selectedPageLimit);

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
      <TableFooter
        pagination={pagination}
        pageLimits={pageLimitValues}
        currentPageLimit={pageLimit}
        updatePageLimit={updatePageLimit}
        onPageLimitChange={onPageLimitChange}
      />
    </div>
  );
};

export default React.memo(DataGrid);
