import {
  BASE_URL,
  CUSTOMER_URL,
  HEADERS,
  defaultPageLimit,
  defaultPageNumber,
} from "./constants";
import { Customer } from "./appTypes";

export const getData = async (
  pageNumber: number = defaultPageNumber,
  limit: number = defaultPageLimit
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
