import React from 'react';
import css from './MainTable.module.css';
import { v4 as uuidv4 } from 'uuid';


import Thead from './Thead/Thead';
import Tbody from './Tbody/Tbody';
// import Tarhived from './Tarhived/Tarhived';

const MainTable = ({ students, handleClick, isChecked, handleSelectAll, isCheckedAll }) => {
  return (
    <div className={css.wrapper}>
      <table>
        <Thead
          handleSelectAll={handleSelectAll} isCheckedAll={isCheckedAll}
        />
        {students.map((student, index) => (
          <Tbody
            key={uuidv4()}
            index={index}
            students={students}
            name={student.name}
            id={student.id}
            classs={student.class}
            score={student.score}
            speed={student.speed}
            parents={student.parents}
            tests={student.tests}
            handleClick={handleClick}
            isChecked={isChecked}
            
          />
        ))}
        {/* <Tarhived items={items} /> */}
      </table>
      <p className={css.title}>Archived</p>
    </div>
  );
};
export default MainTable;
