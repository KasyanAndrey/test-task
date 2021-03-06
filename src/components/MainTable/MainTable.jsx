import React from 'react';
import css from './MainTable.module.css';
import { v4 as uuidv4 } from 'uuid';

import Thead from './Thead/Thead';
import Tbody from './Tbody/Tbody';
// import Tarhived from './Tarhived/Tarhived';

const MainTable = ({
  students,
  sortByStudents,
  isCheckedCheckbox,
  checkAll,
  checkCur,
}) => {
  return (
    <div className={css.wrapper}>
      <table>
        <Thead
          isCheckedCheckbox={isCheckedCheckbox}
          checkAll={checkAll}
          sortByStudents={sortByStudents}
        />
        {students.map((student, index) => (
          <Tbody
            key={uuidv4()}
            index={index}
            student={student}
            students={students}
            name={student.name}
            id={student.id}
            classs={student.class}
            score={student.score}
            speed={student.speed}
            parents={student.parents}
            tests={student.tests}
            checkCur={checkCur}
            isCheckedCheckbox={isCheckedCheckbox}
          />
        ))}
        {/* <Tarhived students={students}/> */}
      </table>
      <p className={css.title}>Archived</p>
    </div>
  );
};
export default MainTable;
