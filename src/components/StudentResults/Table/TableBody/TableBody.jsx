import React from 'react';
import css from './TableBody.module.css';
import { v4 as uuidv4 } from 'uuid';

import { colorFilterScore, colorFilterSpeed } from '../../../../helpers/colors';

const TableBody = ({ tests }) => {
  return (
    <tbody className={css.thead}>
      {tests.map(
        ({ label, score, speed, total, expSpeed, concept, date }, index) => (
          <tr className={css.tr} key={uuidv4()}>
            <tb className={`${css.tb} ${css.num}`}>{index + 1}</tb>
            <tb className={`${css.tb} ${css.testLabel}`}>{label}</tb>
            <tb
              className={`${css.tb} ${css.score}`}
              style={{ color: colorFilterScore(score) }}
            >{score ?? 'NIL'}</tb>
            <tb
              className={`${css.tb} ${css.speed}`}
              style={{ color: colorFilterSpeed(speed) }}
            >{speed ?? 'NIL'}</tb>
            <tb className={`${css.tb} ${css.totalQ}`}>{total}</tb>
            <tb className={`${css.tb} ${css.expSpeed}`}>{expSpeed}</tb>
            <tb className={`${css.tb} ${css.concept}`}>{concept}</tb>
            <tb className={`${css.tb} ${css.date}`}>{date}</tb>
            <tb className={`${css.tb} ${css.checkbox}`}>
              <input type="checkbox" />
            </tb>
          </tr>
        ),
      )}
    </tbody>    
  );
};

export default TableBody;
