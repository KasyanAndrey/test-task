import React from 'react';
import { useState, useEffect } from 'react';
import css from './Students.module.css';

import { StudentsApi } from '../../services/QueryApi';
import Filter from '../../components/Filter/Filter';
import Headline from '../../components/Headline/Headline';
import MainTable from '../../components/MainTable/MainTable';
import Pagination from '../../components/Pagination/Pagination';
import Selectedline from '../../components/Selectedline/Selectedline';

const Students = () => {
  const [state, setState] = useState([]);

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState([]);
  const [sortDir, setSortDir] = useState(1);

  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [elemCount, setElemCount] = useState(10);

  const [loading, setLoading] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

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
    setSize(20);
    setPage(1);
    setSearch(query);
  };

  const handleResetPage = () => {
    setSize(10);
    setPage(1);
    setSearch('');
    setSortBy([]);
    setSortDir(1);
  };

  const sortByStudents = e => {
    setSortBy(e.currentTarget.id);
    if (sortDir === -1) {
      setSortDir(1);
    } else setSortDir(-1);
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

  const checkAll = () => {
    setState(state =>
      state.map(item => ({
        ...item,
        checked: !allChecked,
      })),
    );
    setIsCheck(true);
  };

  const checkCur = idx => {
    setState(state =>
      state.map((item, index) => {
        if (index === idx) {
          return {
            ...item,
            checked: !item.checked,
          };
        }
        return item;
      }),
    );
    setIsCheck(true);
  };

  const cancelSelected = () => {
    setState(state => {
      return state.map(item => ({
        ...item,
        checked: false,
      }));
    });
    setIsCheck(false);
  };

  const choseStudet = () => {
    const choseItems = [];
    state.map(item => {
      if (item.checked || allChecked === !allChecked) {
        choseItems.push(item);
      }
      return item;
    });
    return choseItems.length;
  };

  return (
    <section className={css.section}>
      <Filter />
      {isCheck ? (
        <Selectedline
          cancelSelected={cancelSelected}
          state={state}
          choseStudet={choseStudet}
        />
      ) : (
        <Headline
          state={state}
          onSubmit={handleFormSubmit}
          handleResetPage={handleResetPage}
        />
      )}
      {loading ? (
        <h2 className={css.loader}>Loading...</h2>
      ) : (
        <>
          <MainTable
            students={state}
            sortByStudents={sortByStudents}
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
