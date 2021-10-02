import React from "react";

import "./TableCenteredContent.css";

interface OwnProps {
  label: string;
}

const TableCenteredContent: React.FC<OwnProps> = ({ label }: OwnProps) => {
  return (
    <div className="table-centered-container">
      <span className="table-centered-label">{label}</span>
    </div>
  );
};

export default React.memo(TableCenteredContent);
