/* 
  This simple DataGridContext provides a way to know if any cell is in edit mode.
  `isEditingAnyCell` property is useful to track and disable the header sorting
  and row actions.
*/

import React from "react";
import { DataGridContextProps } from "./DataGrid.types";

interface OwnProps {
  children?: React.ReactNode;
}

export const DataGridContext = React.createContext<DataGridContextProps>({});

export const DataGridProvider = ({ children }: OwnProps) => {
  const [isEditingAnyCell, setIsEditingAnyCell] = React.useState(false);
  const updateIsEditingAnyCell = (newState: boolean) => {
    setIsEditingAnyCell(newState);
  };

  return (
    <DataGridContext.Provider
      value={{ isEditingAnyCell, updateIsEditingAnyCell }}
    >
      {children}
    </DataGridContext.Provider>
  );
};
