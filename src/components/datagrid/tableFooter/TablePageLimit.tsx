import React from "react";

interface OwnProps {
  currentPageLimit: number;
  pageLimits: number[];
  updateSelectedPageLimit: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

const TablePageLimit: React.FC<OwnProps> = ({
  currentPageLimit,
  pageLimits,
  updateSelectedPageLimit,
}: OwnProps) => {
  return (
    <div className="table-pagelimit-container">
      <label>Rows per page : </label>
      <select
        className="table-page-limit-select"
        value={currentPageLimit}
        onChange={updateSelectedPageLimit}
      >
        {pageLimits?.map((limit, index: number) => (
          <option key={`pagelimit${index}`}>{limit}</option>
        ))}
      </select>
    </div>
  );
};

export default React.memo(TablePageLimit);
