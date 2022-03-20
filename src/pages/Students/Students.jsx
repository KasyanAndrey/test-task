import React from 'react';
import { useState, useEffect } from 'react';

import css from './Students.module.css';

import Filter from '../../components/Filter/Filter';
import Headline from '../../components/Headline/Headline';
import Spreadsheet from '../../components/Spreadsheet/Spreadsheet';
import Pagination from '../../components/Pagination/Pagination';
import { QueryApi } from '../../services/QueryApi';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const fetchStudents = () => {
      QueryApi({ searchQuery, currentPage, pageSize })
        .then(items => {
          if (items.length === 0) {
            setError(true);
            return;
          }

          setStudents(state => [...state, ...items]);
        })
        .catch(error => setError(error));
    };

    fetchStudents();
  }, [searchQuery, currentPage, pageSize]);
  
  const handleFormSubmit = query => {
    setSearchQuery(query);
    setStudents([]);
    setCurrentPage(1);
    setPageSize(10);
    setError(error);
  };
  debugger;

  const handleArrowForward = ()=> {
    setCurrentPage(state => state + 1);
    setPageSize(state => state + 10);
  };

  const handleArrowBack = () => {
    setCurrentPage(state => state - 1);
    setPageSize(state => state - 10);
  };

  return (
    <section className={css.section}>
      <Filter />
      <Headline onSubmit={handleFormSubmit} />
      {students && <Spreadsheet items={students} />}
      <Pagination
        items={students}
        onForward={handleArrowForward}
        onBack={handleArrowBack}
      />
    </section>
  );
};
export default Students;
