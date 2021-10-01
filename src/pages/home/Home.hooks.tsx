import React, { useState, useEffect } from "react";

import { getData } from "../../common/apiUtil";
import { defaultPageLimit } from "../../common/constants";

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
  const [loading, setLoading] = useState(false);
  const [totalDataCount, setTotalDataCount] = useState(0);

  const updatePageNumber = (newPageNumber: number) => {
    setPageNumber(newPageNumber);
  };

  const getCustomers = async (page: number, pageLimit: number) => {
    setLoading(true);
    await getData(page, pageLimit)
      .then((result) => result.json())
      .then((res) => {
        setCustomers(res.data);
        setTotalDataCount(res.totalCount);
        setLoading(false);
      });
    setPageNumber(page);
  };

  // useEffect(() => {
  //   // make a fetch call to the API and get new data and set the data
  //   setCustomers([]);
  // }, [pageNumber]);

  useEffect(() => {
    getCustomers(1, defaultPageLimit);
  }, []);

  const updateCustomers = (page: number, pageLimit: number) => {
    getCustomers(page, pageLimit);
  };
  return {
    customers,
    pageNumber,
    getCustomers,
    totalDataCount,
    loading,
    updateCustomers,
    updatePageNumber,
  };
};

export default useCustomersHook;
