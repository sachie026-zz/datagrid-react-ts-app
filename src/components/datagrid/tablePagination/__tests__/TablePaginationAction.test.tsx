/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, fireEvent } from "@testing-library/react";

import TablePaginationAction from "../TablePaginationAction";

describe("TablePaginationAction", () => {
  test("should render properly", async () => {
    const onNext = jest.fn();
    const onPrev = jest.fn();
    const { queryByText } = render(
      <TablePaginationAction onNext={onNext} onPrev={onPrev} />
    );
    expect(queryByText("Next")).toBeInTheDocument();
    expect(queryByText("Prev")).toBeInTheDocument();
  });

  test("should fire the valid event handler", async () => {
    const onNext = jest.fn();
    const onPrev = jest.fn();
    const { getByText } = render(
      <TablePaginationAction onNext={onNext} onPrev={onPrev} />
    );
    const nextButton = getByText("Next");
    fireEvent.click(nextButton);
    expect(onNext).toBeCalled();

    const prevButton = getByText("Prev");
    fireEvent.click(prevButton);
    expect(onPrev).toBeCalled();
  });
});
