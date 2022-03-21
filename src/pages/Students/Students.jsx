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
  const [itemsPerPage, setItemsPerPage] = useState(10);
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

  const handlNextPage = () => {
    setCurrentPage(currentPage + 1);
    setItemsPerPage(itemsPerPage + 10);
  };

  const handlPrevPage = () => {
    setCurrentPage(currentPage - 1);
    setItemsPerPage(itemsPerPage - 10);
  };

  return (
    <section className={css.section}>
      <Filter />
      <Headline onSubmit={handleFormSubmit} />
      {students && <Spreadsheet items={currentItems} />}
      <Pagination
        items={currentItems}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        paginate={paginate}
        nextPage={handlNextPage}
        prevPage={handlPrevPage}
      />
    </section>
  );
};
export default Students;
