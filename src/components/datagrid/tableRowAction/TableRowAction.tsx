import React from "react";

interface OwnProps {
  hidden?: boolean;
}

const TableRowAction: React.FC<OwnProps> = ({ hidden }: OwnProps) => {
  return <div className="tablerow-actions">{hidden ? "" : "Delete"}</div>;
};

export default TableRowAction;
