import {
  BASE_URL,
  HEADERS,
  defaultPageLimit,
  defaultPageNumber,
} from "./constants";

export const getData = async (
  pageNumber: number = defaultPageNumber,
  limit: number = defaultPageLimit
) => {
  return await fetch(`${BASE_URL}?pageNumber=${pageNumber}&limit=${limit}`);
};

export const deleteRow = async (id: String) => {
  return await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: HEADERS,
  });
};

export const updateRow = async (id: String, name: string) => {
  return await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: HEADERS,
    body: JSON.stringify({ name: name }),
  });
};
