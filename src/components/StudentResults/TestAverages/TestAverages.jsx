import React from 'react';
import css from './TestAverages.module.css';
import { colorFilterScore, colorFilterSpeed } from '../../../helpers/colors';

const TestAverages = ({ score, speed }) => {
  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        <li className={`${css.item} ${css.name}`}>Average</li>
        <li
          className={`${css.item} ${css.score}`}
          style={{ color: colorFilterScore(score) }}
        >
          {score}
        </li>
        <li
          className={`${css.item} ${css.speed}`}
          style={{ color: colorFilterSpeed(speed) }}
        >
          {speed}
        </li>
      </ul>
    </div>
  );
};
export default TestAverages;
