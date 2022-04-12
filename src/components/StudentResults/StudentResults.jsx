import React from 'react';
import css from './StudentResults.module.css';

import InfoUser from './InfoUser/InfoUser';
import InfoSort from './InfoSort/InfoSort';
import Labels from './Labels/Labels';
import Table from './Table/Table';

const StudentResults = ({ name, id, score, speed, tests }) => {
  return (
    <div className={css.wrapper}>
      <InfoUser name={name} id={id} />
      <InfoSort />
      <span className={css.line}></span>
      <Labels />
      <Table score={score} speed={speed} tests={tests} />
    </div>
  );
};
export default StudentResults;
