import axios from 'axios'

const BASE_URL = 'https://test-task-j.herokuapp.com/data';

export const QueryApi = ({ searchQuery = '', currentPage = 1, pageSize = 10 }) => {
  return axios
    .get(
      `${BASE_URL}?page=${currentPage}&size=${pageSize}&search=${searchQuery}`,
    )
    .then(response => response.data.data);
};
