import React from "react";

interface OwnProps {
  hidden?: boolean;
}

const TableRowAction: React.FC<OwnProps> = ({ hidden }: OwnProps) => {
  return <td className="tablerow-actions">{hidden ? "" : "Delete"}</td>;
};

export default React.memo(TableRowAction);
