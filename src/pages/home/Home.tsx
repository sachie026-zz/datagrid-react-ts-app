import React from "react";

import DataGrid from "../../components/datagrid";
import HomeHeader from "./header";
import useCustomersHook from "./Home.hooks";
import {
  CUSTOMER_TABLE_COLUMN_KEYS,
  CUSTOMER_TABLE_COLUMN_LABELS,
  GRID_PAGE_LIMIT_VALUES,
} from "../../common/constants";
import "./Home.css";

const Home: React.FC = () => {
  const {
    customers,
    totalDataCount,
    pageNumber,
    loading,
    pageLimit,
    onUpdateRowData,
    onPageLimitChangeHandler,
    onNextPageClickHandler,
    onPrevPageClickHandler,
    onDeleteActionHandler,
  } = useCustomersHook();

  const isPossibleToFetchNextData = pageNumber * pageLimit < totalDataCount;
  const isPossibleToFetchPrevData = pageNumber > 1;

  return (
    <div className="container">
      <HomeHeader />
      <DataGrid
        editable
        columns={CUSTOMER_TABLE_COLUMN_KEYS}
        columnLabels={CUSTOMER_TABLE_COLUMN_LABELS}
        rows={customers}
        gridKey="customer-grid"
        pageLimitValues={GRID_PAGE_LIMIT_VALUES}
        selectedPageLimit={pageLimit}
        noResultLabel="No curstomers data!"
        onPageLimitChange={onPageLimitChangeHandler}
        pagination={{
          pageNumber: pageNumber,
          limit: pageLimit,
          totalCount: totalDataCount,
          show: true,
          onNext: () => onNextPageClickHandler(isPossibleToFetchNextData),
          onPrev: () => onPrevPageClickHandler(isPossibleToFetchPrevData),
        }}
        tableRowActions={[
          {
            name: "Delete",
            onAction: onDeleteActionHandler,
          },
        ]}
        loading={loading}
        onEditCellHandler={onUpdateRowData}
      />
    </div>
  );
};

export default Home;
