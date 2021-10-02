import React, { useState, useEffect } from "react";

import { getData, deleteRow } from "../../common/apiUtil";
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
      })
      .catch((err) => {
        console.log("Error while fetching customer", err);
      });
    setPageNumber(page);
  };

  const deleteCustomer = async (customerId: string) => {
    setLoading(true);
    await deleteRow(customerId)
      .then(() => {
        getCustomers(pageNumber, pageLimit);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error while deleting customer", err);
      });
  };

  const updateCustomers = (page: number, limit: number) => {
    getCustomers(page, limit);
  };

  const updatePageLimit = (limit: number) => {
    setPageLimit(limit);
  };

  useEffect(() => {
    // On component mount: fetch customers for page number 1 and initial page limit
    getCustomers(1, pageLimit);
  }, []);

  return {
    customers,
    pageNumber,
    pageLimit,
    totalDataCount,
    loading,
    getCustomers,
    deleteCustomer,
    updateCustomers,
    updatePageNumber,
    updatePageLimit,
  };
};

export default useCustomersHook;
