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
  const [itemsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  // const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const fetchStudents = () => {
      // setIsLoading(true);
      QueryApi({ searchQuery, currentPage, itemsPerPage })
        .then(items => {
          if (items.length === 0) {
            setError(true);
            return;
          }

          setTotalItems(items.length);
          setStudents(state => [...state, ...items]);
        })
        .catch(error => setError(error))
        .finally(() => {
          // setIsLoading(false);

          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        });
    };

    fetchStudents();
  }, [searchQuery, currentPage, itemsPerPage]);

  // console.log(students);

  const handleFormSubmit = query => {
    setSearchQuery(query);
    setStudents([]);
    setCurrentPage(1);
    setError(error);
  };

  const indexOfLastItem = currentPage + itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = students.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNum => setCurrentPage(pageNum);
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  return (
    <section className={css.section}>
      <Filter />
      <Headline onSubmit={handleFormSubmit} />
      {students && (
        <Spreadsheet
          items={currentItems}
          paginate={paginate}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          totalItems={totalItems}
        />
      )}
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </section>
  );
};
export default Students;
