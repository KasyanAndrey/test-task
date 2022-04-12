import React from 'react';
import css from "./TableHead.module.css";

const TableHead = () => {
  return (
    <thead className={css.thead}>
      <tr className={css.tr}>
        <th className={css.th}>
          <span className={css.num}></span>
        </th>
        <th className={`${css.th} ${css.testLabel}`}>Test Label</th>
        <th className={`${css.th} ${css.score}`}>Score</th>
        <th className={`${css.th} ${css.speed}`}>Speed</th>
        <th className={`${css.th} ${css.totalQ}`}>Total Q-ns</th>
        <th className={`${css.th} ${css.expSpeed}`}>Exp. Speed</th>
        <th className={`${css.th} ${css.concept}`}>Concept</th>
        <th className={`${css.th} ${css.date}`}>
          Date<span className={css.arrow}></span>
        </th>
        <th className={`${css.th} ${css.absent}`}>Absent</th>
      </tr>
    </thead>
  );
};

export default TableHead;
