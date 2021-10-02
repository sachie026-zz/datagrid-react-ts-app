import React from "react";

import "./TableLoader.css";

interface OwnProps {
  label: string;
}

const TableLoader: React.FC<OwnProps> = ({ label }: OwnProps) => {
  return (
    <div className="table-loader-container">
      <span className="table-loader-label">{label}</span>
    </div>
  );
};

export default React.memo(TableLoader);
