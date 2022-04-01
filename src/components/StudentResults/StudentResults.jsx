import React from 'react';
import css from './StudentResults.module.css';

import InfoUser from './InfoUser/InfoUser';
import InfoSort from './InfoSort/InfoSort';
import Labels from './Labels/Labels';
import Table from './Table/Table';

const StudentResults = ({ students }) => {
  return (
    <div className={css.wrapper}>
      <InfoUser items={students} />
      <InfoSort />
      <span className={css.line}></span>
      <Labels />
      <Table items={students} />
    </div>
  );
};
export default StudentResults;