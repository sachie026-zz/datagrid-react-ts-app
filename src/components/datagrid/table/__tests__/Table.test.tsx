/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";

import Table from "../Table";

describe("Table", () => {
  test("should render properly", async () => {
    const { container } = render(
      <Table>
        <div>table1</div>
      </Table>
    );
    expect(container).toContainHTML("<div>table1</div>");
  });
});
