import React from "react";

import "./TableRow.css";

interface OwnProps {
  rowKey: string;
  children?: React.ReactNode;
}

const TableRow: React.FC<OwnProps> = ({ rowKey, children }: OwnProps) => {
  return (
    <div key={rowKey} className="table-row">
      {children}
    </div>
  );
};

export default React.memo(TableRow);
