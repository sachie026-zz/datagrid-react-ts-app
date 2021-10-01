import React from "react";

interface OwnProps {
  children?: React.ReactNode;
}

const Table: React.FC<OwnProps> = ({ children }: OwnProps) => {
  return <table className="table">{children}</table>;
};

export default Table;
