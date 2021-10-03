/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";

import TableRow from "../TableRow";

describe("TableRow", () => {
  test("should render properly", async () => {
    const rowKey = "grid";
    const { container } = render(
      <TableRow rowKey={rowKey}>
        <div>row1</div>
      </TableRow>
    );
    expect(container).toContainHTML("<div>row1</div>");
  });
});
