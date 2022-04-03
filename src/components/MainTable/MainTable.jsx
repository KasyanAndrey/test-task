import React from 'react';
import css from './MainTable.module.css';
import { v4 as uuidv4 } from 'uuid';


import Thead from './Thead/Thead';
import Tbody from './Tbody/Tbody';
// import Tarhived from './Tarhived/Tarhived';

const MainTable = ({ students }) => {
  return (
    <div className={css.wrapper}>
      <table>
        <Thead />
        {students.map((student, index) => (
          <Tbody
            index={index}
            name={student.name}
            id={student.id}
            class={student.class}
            score={student.score}
            speed={student.speed}
            parents={student.parents}
            tests={student.tests}
          />
        ))}

        {/* <Tarhived items={items} /> */}
      </table>
      <p className={css.title}>Archived</p>
    </div>
  );
};
export default MainTable;
