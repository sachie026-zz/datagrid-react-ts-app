import React from "react";

interface OwnProps {
  data?: string;
  rowKey: string;
  children?: React.ReactNode;
}

const TableHeader: React.FC<OwnProps> = ({ rowKey, children }: OwnProps) => {
  return (
    <div key={rowKey} className="table-row">
      {children}
    </div>
  );
};

export default TableHeader;
