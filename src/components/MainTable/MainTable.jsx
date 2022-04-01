import React from 'react';
import css from './MainTable.module.css';

import Thead from './Thead/Thead';
import Tbody from './Tbody/Tbody';
// import Tarhived from './Tarhived/Tarhived';

const MainTable = ({ students }) => {
  return (
    <div className={css.wrapper}>
      <table>
        <Thead />
        <Tbody students={students} />
        {/* <Tarhived items={items} /> */}
      </table>
      <p className={css.title}>Archived</p>
    </div>
  );
};
export default MainTable;
