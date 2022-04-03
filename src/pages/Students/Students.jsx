import React from 'react';
import { useState, useEffect } from 'react';

import css from './Students.module.css';

import Filter from '../../components/Filter/Filter';
import Headline from '../../components/Headline/Headline';
import MainTable from '../../components/MainTable/MainTable';
import Pagination from '../../components/Pagination/Pagination';
// import StudentResults from '../../components/StudentResults/StudentResults'
import { StudentsApi } from '../../services/QueryApi';

const Students = () => {
  const [state, setState] = useState([]);
  const [page, setPage] = useState(1);
  const [size] = useState(10);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState([]);
  const [sortDir, setSortDir] = useState(1);
  const [loading, setLoading] = useState(false);
  const [student, setStudent] = useState([]);
  const [elemCount, setElemCount] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [indexStudent, setIndexStudent] = useState();

  useEffect(() => {
    setLoading(true);
    StudentsApi(page, size, search, sortBy, sortDir).then(response => {
      setState(response.data);
      setTotalCount(response.totalCount);
      setTotalPages(response.totalPages);
      setLoading(false);
    });
  }, [page, size, search, sortBy, sortDir]);

  const handleFormSubmit = query => {
    setSearch(query);
    setStudent([]);
  };

  const handlNextPage = () => {
    if (page >= totalPages) {
      return;
    } else {
      setPage(page + 1);
      setElemCount(elemCount + 10);
    }
  };

  const handlPrevPage = () => {
    if (page <= 1) {
      return;
    } else {
      setPage(page - 1);
      setElemCount(elemCount - 10);
    }
  };
  return (
    <section className={css.section}>
      <Filter />
      <Headline onSubmit={handleFormSubmit} />
      {/* <StudentResults students={students} /> */}
      {loading ? (
        <h2 className={css.loader}>Loading...</h2>
      ) : (
        <>
          <MainTable students={state}/>
          <Pagination
            size={size}
            elemCount={elemCount}
            totalCount={totalCount}
            prevPage={handlPrevPage}
            nextPage={handlNextPage}
          />
        </>
      )}
    </section>
  );
};
export default Students;
