import React from "react";

import DataGrid from "../../components/datagrid";
import useCustomersHook from "./Home.hooks";
import "./Home.css";

const Home: React.FC = () => {
  const { customers } = useCustomersHook();
  console.log("customers", customers);
  return (
    <div className="container">
      <div>Customers</div>
      <DataGrid
        columns={["id", "title"]}
        rows={customers}
        gridKey="customer-grid"
      />
    </div>
  );
};

export default Home;
