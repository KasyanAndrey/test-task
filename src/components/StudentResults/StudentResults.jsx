import React from "react";
import css from "./StudentResults.module.css";

import InfoUser from "./InfoUser/InfoUser";

const StudentResults = () => {
  return (
    <div className={css.wrapper}>
      <InfoUser />
      <div className={css.infoSort}></div>
      <div className={css.labels}></div>
      <div className={css.table}></div>
    </div>
  );
};
export default StudentResults;
