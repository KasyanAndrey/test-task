import React from "react";
import css from "./StudentResults.module.css";

import InfoUser from "./InfoUser/InfoUser";
import InfoSort from "./InfoSort/InfoSort";

const StudentResults = ({ items }) => {
  return (
    <div className={css.wrapper}>
      <InfoUser items={items} />
      <InfoSort />
      <div className={css.labels}></div>
      <div className={css.table}></div>
    </div>
  );
};
export default StudentResults;
