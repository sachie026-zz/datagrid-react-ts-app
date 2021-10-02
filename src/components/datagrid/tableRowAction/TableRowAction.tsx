import React from "react";

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
  return (
    <div className="tablerow-actions">
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
