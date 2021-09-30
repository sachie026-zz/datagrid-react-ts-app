import React, { useState, useEffect } from "react";

import { getData } from "../../common/apiUtil";

interface Customer {
  id: string;
  name: string;
  totalProducts: number;
  dueAmount: number;
  title: string;
}

const useCustomersHook = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [pageNumber, setPageNumber] = useState(0);

  const updatePageNumber = (newPageNumber: number) => {
    setPageNumber(newPageNumber);
  };

  const getCustomers = async () => {
    await getData()
      .then((result) => result.json())
      .then((res) => setCustomers(res));
  };

  useEffect(() => {
    // umake a fetch call to the API and get new data and set it to the customer
    setCustomers([]);
  }, [pageNumber]);

  useEffect(() => {
    getCustomers();
  }, []);

  const updateCustomers = () => {};
  return {
    customers,
    pageNumber,
    getCustomers,
    updateCustomers,
    updatePageNumber,
  };
};

export default useCustomersHook;
