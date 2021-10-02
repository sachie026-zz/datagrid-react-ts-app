/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";

import TableCenteredContent from "../TableCenteredContent";

describe("TableCenteredContent", () => {
  test("should render properly", async () => {
    const { getByText } = render(<TableCenteredContent label="no data" />);
    expect(getByText("no data")).toBeInTheDocument();
  });
});
