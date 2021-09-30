import React from "react";

import DataGrid from "../../components/datagrid";
import useCustomersHook from "./Home.hooks";
import "./Home.css";

const Home: React.FC = () => {
  const { customers, totalDataCount, pageNumber, loading } = useCustomersHook();
  console.log("customers", customers);
  return (
    <div className="container">
      <div>Customers : {totalDataCount}</div>
      <DataGrid
        columns={["name", "due_amount", "total_products"]}
        rows={customers}
        gridKey="customer-grid"
      />
    </div>
  );
};

export default Home;
