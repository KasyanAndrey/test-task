import React from "react";
import css from "./TestAverages.module.css";

const TestAverages = () => {
  return (
    <div className={css.wrapper}>
      <tbody className={css.thead}>
        <tr className={css.tr}>
          <tb className={`${css.tb} ${css.num}`}></tb>
          <tb className={`${css.tb} ${css.name}`}>Average</tb>
          <tb className={`${css.tb} ${css.score}`}>96%</tb>
          <tb className={`${css.tb} ${css.speed}`}>Above expected</tb>
        </tr>
      </tbody>
    </div>
  );
};
export default TestAverages;
