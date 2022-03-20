import axios from 'axios'

const BASE_URL = 'https://test-task-j.herokuapp.com/data';

export const QueryApi = ({ searchQuery = '', currentPage = 1, perPage = 10 }) => {
  return axios
    .get(
      `${BASE_URL}?page=${currentPage}&size=${perPage}&search=${searchQuery}`,
    )
    .then(response => response.data.data);
};

/* 
sortBy: string from [‘name’, ‘class’, ‘score’, ‘speed’]
sortDir: int from [-1, 1] 
*/
