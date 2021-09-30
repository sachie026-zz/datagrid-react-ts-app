import React from "react";

interface OwnProps {
  dataUrl?: string;
}

const TablePagination: React.FC<OwnProps> = ({ dataUrl }: OwnProps) => {
  return <div>table pagination url : {dataUrl}</div>;
};

export default TablePagination;
