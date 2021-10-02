/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";

import TableHeader from "../TableHeader";

describe("TableHeader", () => {
  test("should render properly", async () => {
    const onHeaderCellClick = jest.fn();
    const gridKey = "grid";
    const columns = ["col1", "col2"];
    const columnLabels = ["Column1", "Column2"];
    const { getByText } = render(
      <TableHeader
        onHeaderCellClick={onHeaderCellClick}
        gridKey={gridKey}
        columns={columns}
        columnLabels={columnLabels}
      />
    );
    expect(getByText("Column1")).toBeInTheDocument();
    expect(getByText("Column2")).toBeInTheDocument();
  });
});
