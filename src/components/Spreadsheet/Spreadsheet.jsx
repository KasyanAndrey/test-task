import React from 'react';
// import { useState, useEffect } from 'react';
import css from './Spreadsheet.module.css';

import Thead from './Thead/Thead';
import Tbody from './Tbody/Tbody';
// import Tarhived from './Tarhived/Tarhived';
// import StudentResults from '../StudentResults/StudentResults';

const Spreadsheet = ({ items }) => {
  // debugger;
  return (
    <div className={css.wrapper}>
      <table>
        {/* <StudentResults items={items}/> */}
        <Thead />
        <Tbody items={items} />
        {/* <Tarhived items={items} /> */}
      </table>
        <p className={css.title}>Archived</p>
    </div>
  );
};
export default Spreadsheet;

/* , paginate, itemsPerPage, currentPage, totalItems */