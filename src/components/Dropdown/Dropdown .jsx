import React from 'react';
import css from './Dropdown.module.css';

export const Dropdown = ({
  currentPage,
  totalItems,
  itemsPerPage,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
        {pageNumbers.map(num => (
          <select key={num} className={css.aroowduwn}>
            <option onClick={() => paginate(num)}>{currentPage}
            </option>
          </select>
        ))}
    </>
  );
};
