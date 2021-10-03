/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, fireEvent } from "@testing-library/react";

import DataGrid from "../DataGrid";

describe("DataGrid", () => {
  const columns = ["col1", "col2"];
  const columnLabels = ["Column1", "Column2"];
  const rows = [
    {
      col1: "testcol1",
      col2: "testcol2",
      col3: "testcol3",
      col4: "testcol4",
    },
  ];
  const gridKey = "datagridkey";
  const onPageLimitChange = jest.fn();

  test("should render column headers properly", async () => {
    const { getByText } = render(
      <DataGrid
        rows={rows}
        columns={columns}
        columnLabels={columnLabels}
        gridKey={gridKey}
        onPageLimitChange={onPageLimitChange}
      />
    );
    expect(getByText("Column1")).toBeInTheDocument();
    expect(getByText("Column2")).toBeInTheDocument();
  });

  test("should render column values properly for valid/passed column keys only", async () => {
    const { queryByText } = render(
      <DataGrid
        rows={rows}
        columns={columns}
        columnLabels={columnLabels}
        gridKey={gridKey}
        onPageLimitChange={onPageLimitChange}
      />
    );
    expect(queryByText("testcol1")).toBeInTheDocument();
    expect(queryByText("testcol2")).toBeInTheDocument();
    expect(queryByText("testcol3")).not.toBeInTheDocument();
    expect(queryByText("testcol4")).not.toBeInTheDocument();
  });

  test("should render no data! when rows are empty", async () => {
    const { queryByText } = render(
      <DataGrid
        rows={[]}
        columns={columns}
        columnLabels={columnLabels}
        gridKey={gridKey}
        onPageLimitChange={onPageLimitChange}
      />
    );
    expect(queryByText("No data!")).toBeInTheDocument();
  });

  test("should be able to click column header and sort them properly", async () => {
    const sortedRowsData = [
      {
        col1: 111,
        col2: 1,
      },
      {
        col1: 112,
        col2: 1,
      },
    ];
    const { queryAllByText, container, getByText } = render(
      <DataGrid
        rows={sortedRowsData}
        columns={columns}
        columnLabels={columnLabels}
        gridKey={gridKey}
        onPageLimitChange={onPageLimitChange}
      />
    );
    // sort on header cell click  
    const firstColumn = getByText("Column1");
    fireEvent.click(firstColumn);
    const allTexts = queryAllByText(/11/);
    expect(allTexts[0]).toContainHTML("112");
  });
});
