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
  const [pageLimit, setPageLimit] = useState(defaultPageLimit);
  const [loading, setLoading] = useState(false);
  const [totalDataCount, setTotalDataCount] = useState(0);

  const updatePageNumber = (newPageNumber: number) => {
    setPageNumber(newPageNumber);
  };

  const getCustomers = async (page: number, limit: number) => {
    setLoading(true);
    await getData(page, limit)
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

  const updateCustomers = (page: number, limit: number) => {
    getCustomers(page, limit);
  };

  const updatePageLimit = (limit: number) => {
    setPageLimit(limit);
  };

  useEffect(() => {
    getCustomers(1, pageLimit);
  }, []);

  return {
    customers,
    pageNumber,
    pageLimit,
    getCustomers,
    totalDataCount,
    loading,
    updateCustomers,
    updatePageNumber,
    updatePageLimit,
  };
};

export default useCustomersHook;
