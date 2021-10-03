/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, fireEvent } from "@testing-library/react";

import TableRowAction from "../TableRowAction";
import { TableRowActionProps } from "../../DataGrid.types";

describe("TableRowAction", () => {
  test("should render the single provided action", async () => {
    const tableRowActions: TableRowActionProps[] = [
      {
        name: "Delete",
        onAction: jest.fn(),
      },
    ];
    const { getByText } = render(
      <TableRowAction tableRowActions={tableRowActions} />
    );
    const deleteButton = getByText("Delete");
    expect(deleteButton).toBeInTheDocument();
  });

  test("should render all provided action", async () => {
    const tableRowActions: TableRowActionProps[] = [
      {
        name: "Delete",
        onAction: jest.fn(),
      },
      {
        name: "Archieve",
        onAction: jest.fn(),
      },
    ];
    const { getByText } = render(
      <TableRowAction tableRowActions={tableRowActions} />
    );

    // Delete button assertions
    const deleteButton = getByText("Delete");
    expect(deleteButton).toBeInTheDocument();
    fireEvent.click(deleteButton);
    expect(tableRowActions[0].onAction).toBeCalled();

    // Archieve button assertions
    const archieveButton = getByText("Archieve");
    expect(archieveButton).toBeInTheDocument();
    fireEvent.click(archieveButton);
    expect(tableRowActions[1].onAction).toBeCalled();
  });

  test("should not render anything when hidden property is passed with valid data", async () => {
    const tableRowActions: TableRowActionProps[] = [
      {
        name: "Delete",
        onAction: jest.fn(),
      },
      {
        name: "Archieve",
        onAction: jest.fn(),
      },
    ];
    const { queryByText } = render(
      <TableRowAction tableRowActions={tableRowActions} hidden />
    );

    const deleteButton = queryByText("Delete");
    expect(deleteButton).not.toBeInTheDocument();

    const archieveButton = queryByText("Archieve");
    expect(archieveButton).not.toBeInTheDocument();
  });
});
