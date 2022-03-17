import React from "react";
import css from "./Spreadsheet.module.css";

import Thead from "./Thead/Thead";
import Tbody from "./Tbody/Tbody";
import Tarhived from './Tarhived/Tarhived';
import StudentResults from '../StudentResults/StudentResults';

const Spreadsheet = ({ items }) => {
  return (
    <div className={css.wrapper}>
      <StudentResults items={items}/>
      <Thead />
      <Tbody items={items} />
      <p className={css.title}>Archived</p>
      <Tarhived items={items} />
    </div>
  );
};
export default Spreadsheet;
