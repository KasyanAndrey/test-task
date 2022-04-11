import axios from 'axios'

const BASE_URL = 'https://test-task-j.herokuapp.com/data';

export const StudentsApi = ( page, size, search, sortBy, sortDir ) => {
  return axios
    .get(
      `${BASE_URL}?page=${page}&size=${size}&search=${search}&sortBy=${sortBy}&sortDir=${sortDir}`,
    )
    .then(response => response.data);
};

// export const QueryApi = ( page, size, search, ) => {
//   return axios
//     .get(
//       `${BASE_URL}?page=${page}&size=${size}&sortBy=${sortBy}&sortDir=${sortDir}`,
//     )
//     .then(response => response.data);
// };

// export const StudentsApi = ( sortBy, sortDir ) => {
//   return axios
//     .get(
//       `${BASE_URL}?page=${page}&size=${size}&search=${search}&sortBy=${sortBy}&sortDir=${sortDir}`,
//     )
//     .then(response => response.data);
// };