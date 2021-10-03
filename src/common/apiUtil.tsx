import {
  BASE_URL,
  CUSTOMER_URL,
  HEADERS,
  DEFAULT_PAGE_LIMIT,
  DEFAULT_PAGE_NUMBER,
} from "./constants";
import { Customer } from "./appTypes";

export const getData = async (
  pageNumber: number = DEFAULT_PAGE_NUMBER,
  limit: number = DEFAULT_PAGE_LIMIT
) => {
  return await fetch(
    `${BASE_URL}/${CUSTOMER_URL}?pageNumber=${pageNumber}&limit=${limit}`
  );
};

export const deleteRow = async (id: String) => {
  return await fetch(`${BASE_URL}/${CUSTOMER_URL}/${id}`, {
    method: "DELETE",
    headers: HEADERS,
  });
};

export const updateRow = async (id: String, data: Customer) => {
  return await fetch(`${BASE_URL}/${CUSTOMER_URL}/${id}`, {
    method: "PUT",
    headers: HEADERS,
    body: JSON.stringify(data),
  });
};
