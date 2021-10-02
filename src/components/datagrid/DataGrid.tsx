import React, { useEffect } from "react";

import Table from "./table";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import TableFooter from "./tableFooter";
import TableLoader from "./tableLoader";
import TableCenteredContent from "./tableCenteredContent";
import useDataGridhooks from "./DataGrid.hooks";
import { DataGridProps } from "./DataGrid.types";
import "./DataGrid.css";

const DataGrid: React.FC<DataGridProps> = ({
  pagination,
  columns,
  columnLabels,
  rows,
  gridKey,
  tableRowActions,
  pageLimitValues,
  selectedPageLimit,
  onPageLimitChange,
  noResultLabel,
  loading,
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

  if (!loading && (!rows || rows.length === 0)) {
    return <TableCenteredContent label={noResultLabel || "No data!"} />;
  }

  return (
    <div className="table-container">
      {loading && <TableLoader label="loading..." />}
      <Table>
        <TableHeader
          columns={columns}
          columnLabels={columnLabels}
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
