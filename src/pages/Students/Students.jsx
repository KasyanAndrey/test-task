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
  const [elemCount, setElemCount] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [isChacked, setIsChacked] = useState(false)

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
    setState([]);
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
  
  const allChecked = state.every(({ checked }) => checked);
// debugger
  const handleUpdatePage = () => {
    setState(state);
    setPage(1);
    setElemCount(10);
  };

  const checkAll = () => {
    setState(state => {
      return state.map(item => ({
        ...item,
        checked: !allChecked,
      }));
    });
  };

  const checkCur = (idx) => {
    setState(state => {
      return state.map((item, index) => {
        if (index === idx) {
          return {
            ...item,
            checked: !item.checked,
          };
        }
        return item;
      });
    });
  };
  // debugger
  return (
    <section className={css.section}>
      <Filter />
      <Headline
        onSubmit={handleFormSubmit}
        handleUpdatePage={handleUpdatePage}
      />
      {loading ? (
        <h2 className={css.loader}>Loading...</h2>
      ) : (
        <>
          <MainTable
            students={state}
            isCheckedCheckbox={allChecked}
            checkAll={checkAll}
            checkCur={checkCur}
          />
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
