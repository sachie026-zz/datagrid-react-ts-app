import React, { useState, useEffect } from "react";

import { TableRowProps } from "./DataGrid.types";

const useDataGridhooks = (dataRows: any[]) => {
  const [tableRows, setTableRows] = useState(dataRows);
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

  return {
    tableRows,
    sortTableRows,
    updateTableRows,
  };
};

export default useDataGridhooks;
