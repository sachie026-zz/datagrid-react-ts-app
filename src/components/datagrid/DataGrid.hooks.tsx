/*
    Custom hook to manipulate data for the grid
    i.e, page limit, data rows, sort action etc.
*/

import React, { useState, useEffect } from "react";

import { TableRowProps } from "./DataGrid.types";

const useDataGridhooks = (dataRows: any[], selectedPageLimit?: number) => {
  const [tableRows, setTableRows] = useState(dataRows);
  const [pageLimit, setPageLimit] = useState(selectedPageLimit);
  const [sortDescOrder, setSortDescOrder] = useState(false);

  const sortTableRows = (key: string) => {
    const tempRows = new Array(...tableRows);
    tempRows.sort((row1: any, row2: any) =>
      sortDescOrder ? row1[key] - row2[key] : row2[key] - row1[key]
    );

    setTableRows(tempRows);
    setSortDescOrder((prev) => !prev);
  };

  const updateTableRows = (updatedRows: TableRowProps[]) => {
    setTableRows(updatedRows);
  };

  const updatePageLimit = (newPageLimit: number) => {
    setPageLimit(newPageLimit);
  };

  return {
    tableRows,
    sortTableRows,
    updateTableRows,
    pageLimit,
    updatePageLimit,
  };
};

export default useDataGridhooks;
