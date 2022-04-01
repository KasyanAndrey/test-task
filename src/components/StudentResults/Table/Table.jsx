import React from 'react';
import css from './Table.module.css';

import TableHead from './TableHead/TableHead';
import TableBody from './TableBody/TableBody';
import TestAverages from './TestAverages/TestAverages';

const Table = ({ students }) => {
  return (
    <div className={css.wrapper}>
      <TableHead />
      <TableBody students={students} />
      <span className={css.line}></span>
      <TestAverages />
    </div>
  );
};
export default Table;
