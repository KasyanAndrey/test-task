import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import css from './Table.module.css';

import { colorFilterScore, colorFilterSpeed } from '../../../helpers/colors';

const Table = ({ tests }) => {
  return (
    <table className={css.table}>
      <tbody className={`${css.tbody} ${css.line}`}>
        <tr className={css.tr}>
          <th className={css.cell}>
            <span className={css.numThead}></span>
          </th>
          <th className={`${css.cell} ${css.testLabel}`}>Test Label</th>
          <th className={`${css.cell} ${css.score}`}>Score</th>
          <th className={`${css.cell} ${css.speed}`}>Speed</th>
          <th className={`${css.cell} ${css.totalQ}`}>Total Q-ns</th>
          <th className={`${css.cell} ${css.expSpeed}`}>Exp. Speed</th>
          <th className={`${css.cell} ${css.concept}`}>Concept</th>
          <th className={`${css.cell} ${css.date}`}>
            Date<span className={css.arrow}></span>
          </th>
          <th className={`${css.cell} ${css.absent}`}>Absent</th>
        </tr>
        {tests.map(
          ({ label, score, speed, total, expSpeed, concept, date }, index) => (
            <tr className={css.tr} key={uuidv4()}>
              <td className={`${css.cell} ${css.numTbody}`}>{index + 1}</td>
              <td className={`${css.cell} ${css.testLabel}`}>{label}</td>
              <td
                className={`${css.cell} ${css.score}`}
                style={{ color: colorFilterScore(score) }}
              >
                {score ?? 'NIL'}
              </td>
              <td
                className={`${css.cell} ${css.speed}`}
                style={{ color: colorFilterSpeed(speed) }}
              >
                {speed ?? 'NIL'}
              </td>
              <td className={`${css.cell} ${css.totalQ}`}>{total}</td>
              <td className={`${css.cell} ${css.expSpeed}`}>{expSpeed}</td>
              <td className={`${css.cell} ${css.concept}`}>{concept}</td>
              <td className={`${css.cell} ${css.date}`}>{date}</td>
              <td className={`${css.cell} ${css.checkbox}`}>
                <input type="checkbox" />
              </td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
};

export default Table;
