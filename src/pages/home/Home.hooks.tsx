/*
  Custom hook to separate out the logic from the UI componets.
  This hook handles the API calls and all data-grid operations such as:
  - pagination handling
  - mapping API calls to grid operation 
*/
import React, { useState, useEffect } from "react";

import { getData, deleteRow, updateRow } from "../../common/apiUtil";
import { DEFAULT_PAGE_LIMIT } from "../../common/constants";
import { Customer } from "../../common/appTypes";

const useCustomersHook = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageLimit, setPageLimit] = useState(DEFAULT_PAGE_LIMIT);
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
        setLoading(false);
        getCustomers(pageNumber, pageLimit);
      })
      .catch((err) => {
        console.log("Error while deleting customer", err);
      });
  };

  const onUpdateRowData = (updatedRowData: Customer) => {
    setLoading(true);
    updateRow(updatedRowData._id, updatedRowData)
      .then(() => {
        setLoading(false);
        getCustomers(pageNumber, pageLimit);
      })
      .catch((err) => {
        console.log("Error while updating customer", err);
      });
  };

  const updateCustomers = (page: number, limit: number) => {
    getCustomers(page, limit);
  };

  const updatePageLimit = (limit: number) => {
    setPageLimit(limit);
  };

  const onNextPageClickHandler = (isPossibleToFetchNextData: boolean) => {
    if (isPossibleToFetchNextData) {
      updateCustomers(pageNumber + 1, pageLimit);
    }
  };

  const onPrevPageClickHandler = (isPossibleToFetchPrevData: boolean) => {
    if (isPossibleToFetchPrevData) {
      updateCustomers(pageNumber - 1, pageLimit);
    }
  };

  const onDeleteActionHandler = (data: any) => {
    if (data?._id) {
      deleteCustomer(data?._id);
    }
  };

  const onPageLimitChangeHandler = (val: number) => {
    // When page limit changes, need to reset page number to 1
    updatePageLimit(val);
    updateCustomers(1, val);
    updatePageNumber(1);
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
    onUpdateRowData,
    onPageLimitChangeHandler,
    onNextPageClickHandler,
    onPrevPageClickHandler,
    onDeleteActionHandler,
  };
};

export default useCustomersHook;
