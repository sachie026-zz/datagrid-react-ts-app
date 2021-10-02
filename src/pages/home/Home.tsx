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
    pageLimit,
    deleteCustomer,
    updatePageNumber,
    updateCustomers,
    updatePageLimit,
  } = useCustomersHook();

  const isPossibleToFetchNextData = pageNumber * pageLimit < totalDataCount;
  const isPossibleToFetchPrevData = pageNumber > 1;

  return (
    <div className="container">
      <HomeHeader />
      <DataGrid
        columns={["name", "due_amount", "total_products", "joined_at"]}
        columnLabels={["Name", "Due Amount", "Total Products", "Joined"]}
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
        tableRowActions={[
          {
            name: "Delete",
            onAction: (data: any) => {
              if (data?._id) {
                deleteCustomer(data?._id);
              }
            },
          },
        ]}
        loading={loading}
        noResultLabel="No curstomers data!"
      />
    </div>
  );
};

export default Home;
