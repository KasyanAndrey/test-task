import React, { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

import InfoUser from './InfoUser/InfoUser';
import InfoSort from './InfoSort/InfoSort';
import Labels from './Labels/Labels';
import Table from './Table/Table';
import TestAverages from './TestAverages/TestAverages';

const StudentResults = ({ name, id, score, speed, tests }) => {
  return (
    <Fragment key={uuidv4()}>
      <InfoUser name={name} id={id} />
      <InfoSort />
      <Labels />
      <Table tests={tests} />
      <TestAverages score={score} speed={speed} />
    </Fragment>
  );
};
export default StudentResults;
