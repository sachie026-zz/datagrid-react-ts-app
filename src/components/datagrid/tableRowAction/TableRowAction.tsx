import React from "react";

interface OwnProps {
  dataUrl?: string;
}

const TableRowAction: React.FC<OwnProps> = ({ dataUrl }: OwnProps) => {
  return <div>TableRow url : {dataUrl}</div>;
};

export default TableRowAction;