/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";

import { PaginationProps } from "../../DataGrid.types";
import TablePagination from "../TablePagination";

describe("TablePagination", () => {
  test("should render properly when show is true", async () => {
    const pagination: PaginationProps = {
      pageNumber: 2,
      limit: 5,
      totalCount: 21,
      onNext: jest.fn(),
      onPrev: jest.fn(),
      show: true,
    };
    const { getByText } = render(<TablePagination pagination={pagination} />);
    expect(getByText("of 21 rows")).toBeInTheDocument();
  });

  test("should render properly when totalCount is 0", async () => {
    const pagination: PaginationProps = {
      pageNumber: 2,
      limit: 5,
      totalCount: 0,
      onNext: jest.fn(),
      onPrev: jest.fn(),
      show: true,
    };
    const { queryByText } = render(<TablePagination pagination={pagination} />);
    expect(queryByText("of 21 rows")).not.toBeInTheDocument();
  });
});
