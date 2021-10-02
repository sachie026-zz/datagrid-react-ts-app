/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";

import TableLoader from "../TableLoader";

describe("TableLoader", () => {
  test("should render properly", async () => {
    const { getByText } = render(<TableLoader label="loading rows..." />);
    expect(getByText("loading rows...")).toBeInTheDocument();
  });
});
