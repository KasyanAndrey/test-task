import React, { Fragment } from 'react';
import css from './StudentResults.module.css';
import { v4 as uuidv4 } from 'uuid';

import InfoUser from './InfoUser/InfoUser';
import InfoSort from './InfoSort/InfoSort';
import Labels from './Labels/Labels';
import Table from './Table/Table';

const StudentResults = ({ name, id, score, speed, tests }) => {
  return (
    <div className={css.wrapper}>
      <Fragment key={uuidv4()}>
        <InfoUser name={name} id={id} />
        <InfoSort />
        <span className={css.line}></span>
        <Labels />
        <Table score={score} speed={speed} tests={tests} />
      </Fragment>
    </div>
  );
};
export default StudentResults;
