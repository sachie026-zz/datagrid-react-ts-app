import React from "react";

import DataGrid from "../../components/datagrid";
import useCustomersHook from "./Home.hooks";
import { defaultPageLimit } from "../../common/constants";
import "./Home.css";

const Home: React.FC = () => {
  const {
    customers,
    totalDataCount,
    pageNumber,
    loading,
    updatePageNumber,
    updateCustomers,
  } = useCustomersHook();

  const isPossibleToFetchNextData =
    (pageNumber + 1) * defaultPageLimit <= totalDataCount;
  const isPossibleToFetchPrevData = pageNumber > 1;

  console.log("customers", customers);
  return (
    <div className="container">
      <div>Customers : {totalDataCount}</div>
      <DataGrid
        columns={["name", "due_amount", "total_products"]}
        rows={customers}
        gridKey="customer-grid"
        pagination={{
          pageNumber: pageNumber,
          limit: defaultPageLimit,
          totalCount: totalDataCount,
          show: true,
          onNext: () => {
            console.log(
              "onNext",
              pageNumber,
              defaultPageLimit,
              totalDataCount,
              isPossibleToFetchNextData
            );
            if (isPossibleToFetchNextData) {
              updateCustomers(pageNumber + 1, defaultPageLimit);
            }
          },
          onPrev: () => {
            console.log("onPrev", isPossibleToFetchPrevData);
            if (isPossibleToFetchPrevData) {
              updateCustomers(pageNumber - 1, defaultPageLimit);
            }
          },
        }}
      />
    </div>
  );
};

export default Home;
