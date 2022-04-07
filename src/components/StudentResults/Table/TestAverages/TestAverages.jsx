import React from "react";
import css from "./TestAverages.module.css";
import { colorFilterScore, colorFilterSpeed } from '../../../../helpers/colors';


const TestAverages = ( {score, speed} ) => {
  return (
      <tbody className={css.wrapper}>
        <tr className={css.tr}>
          <tb className={`${css.tb} ${css.num}`}></tb>
          <tb className={`${css.tb} ${css.name}`}>Average</tb>
          <tb className={`${css.tb} ${css.score}`}  style={{ color: colorFilterScore(score) }}>{score}</tb>
          <tb className={`${css.tb} ${css.speed}`} style={{ color: colorFilterSpeed(speed) }}>{speed}</tb>
        </tr>
      </tbody>
  );
};
export default TestAverages;
