import React from 'react';
import css from './Table.module.css';

import TableHead from './TableHead/TableHead';
import TableBody from './TableBody/TableBody';
import TestAverages from './TestAverages/TestAverages';

const Table = ({ score, speed, tests }) => {
  return (
    <div className={css.wrapper}>
      <TableHead />
      <TableBody tests={tests} />
      <span className={css.line}></span>
      <TestAverages  score={score} speed={speed}/>
    </div>
  );
};
export default Table;
