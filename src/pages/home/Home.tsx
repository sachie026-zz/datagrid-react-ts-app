import React from "react";

import DataGrid from "../../components/datagrid";
import HomeHeader from "./header";
import useCustomersHook from "./Home.hooks";
import "./Home.css";

const Home: React.FC = () => {
  const {
    customers,
    totalDataCount,
    pageNumber,
    loading,
    updatePageNumber,
    updateCustomers,
    pageLimit,
    updatePageLimit,
  } = useCustomersHook();

  const isPossibleToFetchNextData = pageNumber * pageLimit < totalDataCount;
  const isPossibleToFetchPrevData = pageNumber > 1;

  console.log("customers", customers);
  return (
    <div className="container">
      <HomeHeader totalDataCount={totalDataCount} />
      <DataGrid
        columns={["name", "due_amount", "total_products"]}
        rows={customers}
        gridKey="customer-grid"
        pageLimitValues={[5, 10, 15]}
        selectedPageLimit={pageLimit}
        onPageLimitChange={(val) => {
          // When page limit changes, need to reset page number to 1
          updatePageLimit(val);
          updateCustomers(1, val);
          updatePageNumber(1);
        }}
        pagination={{
          pageNumber: pageNumber,
          limit: pageLimit,
          totalCount: totalDataCount,
          show: true,
          onNext: () => {
            if (isPossibleToFetchNextData) {
              updateCustomers(pageNumber + 1, pageLimit);
            }
          },
          onPrev: () => {
            if (isPossibleToFetchPrevData) {
              updateCustomers(pageNumber - 1, pageLimit);
            }
          },
        }}
      />
    </div>
  );
};

export default Home;
