import React, { useEffect } from "react";

import Table from "./table";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import TableFooter from "./tableFooter";
import TableLoader from "./tableLoader";
import TableCenteredContent from "./tableCenteredContent";
import { DataGridProvider } from "./DataGrid.context";
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
  noResultLabel,
  loading,
  editable,
  onPageLimitChange,
  onEditCellHandler,
}: DataGridProps) => {
  const {
    tableRows,
    pageLimit,
    sortTableRows,
    updateTableRows,
    updatePageLimit,
  } = useDataGridhooks(rows, selectedPageLimit);

  useEffect(() => {
    updateTableRows(rows);
  }, [rows]);

  if (!loading && (!rows || rows.length === 0)) {
    return <TableCenteredContent label={noResultLabel || "No data!"} />;
  }

  return (
    <DataGridProvider>
      <div
        className={`table-container ${loading ? "action-less-container" : ""}`}
      >
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
            editable={editable}
            onEditCellHandler={onEditCellHandler}
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
    </DataGridProvider>
  );
};

export default React.memo(DataGrid);
