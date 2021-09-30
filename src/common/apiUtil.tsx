import { BASE_URL, HEADERS } from "./constants";
// export const createRoom = async (BASE_URL:string, name) => {

//   return await fetch(`${BASE_URL}${ROOMS}/${name}`, {
//     method: "POST",
//     headers: HEADERS,
//     body: JSON.stringify({ name: name, privacy: "public" }),
//   });
// };

export const getData = async () => {
  return await fetch(`${BASE_URL}`);
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
