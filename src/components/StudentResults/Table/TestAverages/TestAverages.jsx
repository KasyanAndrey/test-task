import React from "react";
import css from "./TestAverages.module.css";

const TestAverages = ( {score, speed} ) => {
  return (
    <div className={css.wrapper}>
      <tbody className={css.thead}>
        <tr className={css.tr}>
          <tb className={`${css.tb} ${css.num}`}></tb>
          <tb className={`${css.tb} ${css.name}`}>Average</tb>
          <tb className={`${css.tb} ${css.score}`}>{score}</tb>
          <tb className={`${css.tb} ${css.speed}`}>{speed}</tb>
        </tr>
      </tbody>
    </div>
  );
};
export default TestAverages;
