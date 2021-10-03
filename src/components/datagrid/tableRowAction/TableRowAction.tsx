import React, { useContext } from "react";

import { DataGridContext } from "../DataGrid.context";
import { TableRowActionProps } from "../DataGrid.types";
import "./TableRowAction.css";

interface OwnProps {
  hidden?: boolean;
  tableRowActions?: TableRowActionProps[];
  keyIndex?: number;
  rowData?: any;
}

const TableRowAction: React.FC<OwnProps> = ({
  hidden,
  tableRowActions,
  keyIndex,
  rowData,
}: OwnProps) => {
  const { isEditingAnyCell } = useContext(DataGridContext);
  return (
    <div
      className={`tablerow-actions ${
        isEditingAnyCell ? "action-less-container" : ""
      }`}
    >
      {hidden ? (
        ""
      ) : (
        <>
          {tableRowActions?.map((action, aindex: number) => (
            <button
              key={`rowactions-${keyIndex}${aindex}`}
              title={action.name}
              onClick={() => action.onAction(rowData)}
            >
              {action.name}
            </button>
          ))}
        </>
      )}
    </div>
  );
};

export default React.memo(TableRowAction);
