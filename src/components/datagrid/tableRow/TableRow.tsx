import React from "react";

interface OwnProps {
  data?: string;
  rowKey: string;
  children?: React.ReactNode;
}

const TableRow: React.FC<OwnProps> = ({ rowKey, children }: OwnProps) => {
  return (
    <tr key={rowKey} className="table-row">
      {children}
    </tr>
  );
};

export default TableRow;
