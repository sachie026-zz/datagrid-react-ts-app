/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, fireEvent } from "@testing-library/react";

import TableCell from "../TableCell";

describe("TableCell", () => {
  test("should render cell value properly when celllabel is not provided", async () => {
    const cellValue = "cellvalue";

    const { queryByText } = render(<TableCell cellValue={cellValue} />);
    expect(queryByText(cellValue)).toBeInTheDocument();
  });

  test("should render cell label properly when celllabel is provided", async () => {
    const cellValue = "cellvalue";
    const cellLabel = "celllabel";

    const { queryByText } = render(
      <TableCell cellValue={cellValue} cellLabel={cellLabel} />
    );
    expect(queryByText(cellLabel)).toBeInTheDocument();
    expect(queryByText(cellValue)).not.toBeInTheDocument();
  });

  test("should not render editable input when editable is false", async () => {
    const cellValue = "cellvalue";
    const editable = false;
    const onCellClick = jest.fn();
    const updateCellContent = jest.fn();

    const { getByText, queryByText, container } = render(
      <TableCell
        cellValue={cellValue}
        editable={editable}
        onCellClick={onCellClick}
        updateCellContent={updateCellContent}
      />
    );

    const cell = getByText(cellValue);
    const saveButton = queryByText("Save");
    expect(cell).toBeInTheDocument();
    expect(saveButton).not.toBeInTheDocument();

    fireEvent.dblClick(cell);
    expect(saveButton).not.toBeInTheDocument();
  });

  describe("Editable is true", () => {
    const cellValue = "cellvalue";
    const editable = true;
    const onCellClick = jest.fn();
    const updateCellContent = jest.fn();
    test("should render editable input ", async () => {
      const { getByText, queryByText, container } = render(
        <TableCell
          cellValue={cellValue}
          editable={editable}
          onCellClick={onCellClick}
          updateCellContent={updateCellContent}
        />
      );

      const cell = getByText(cellValue);
      fireEvent.dblClick(cell);

      const saveButton = queryByText("Save");
      expect(saveButton).toBeInTheDocument();
    });

    test("should call update content when save button is clicked ", async () => {
      const { getByText, queryByText, container } = render(
        <TableCell
          cellValue={cellValue}
          editable={editable}
          onCellClick={onCellClick}
          updateCellContent={updateCellContent}
        />
      );

      const cell = getByText(cellValue);
      fireEvent.dblClick(cell);

      // Save button assertions
      const saveButton = getByText("Save");
      fireEvent.click(saveButton);
      expect(updateCellContent).toBeCalled();
    });
  });
});
