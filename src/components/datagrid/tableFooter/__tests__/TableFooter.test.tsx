/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";

import TableFooter from "../TableFooter";

describe("TableFooter", () => {
  test("should render properly", async () => {
    const updatePageLimit = jest.fn();
    const onPageLimitChange = jest.fn();
    const pageLimits = [5, 10];
    const currentPageLimit = 5;
    const { getByText } = render(
      <TableFooter
        pageLimits={pageLimits}
        currentPageLimit={currentPageLimit}
        updatePageLimit={updatePageLimit}
        onPageLimitChange={onPageLimitChange}
      />
    );
    expect(getByText("Rows per page :")).toBeInTheDocument();
    expect(getByText("5")).toBeInTheDocument();
    expect(getByText("10")).toBeInTheDocument();
  });
});
