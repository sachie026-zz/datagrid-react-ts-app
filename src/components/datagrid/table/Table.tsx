import React from "react";

interface OwnProps {
  children?: React.ReactNode;
}

const Table: React.FC<OwnProps> = ({ children }: OwnProps) => {
  return <div className="table">{children}</div>;
};

export default React.memo(Table);
