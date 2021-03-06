import React from 'react';
import { useState } from 'react';
import css from './Tbody.module.css';

import {
  colorFilterScore,
  colorFilterSpeed,
  isCheckStudent,
} from '../../../helpers/colors';
import StudentResults from '../../StudentResults/StudentResults';

const Tbody = ({
  student,
  name,
  id,
  classs,
  score,
  speed,
  parents,
  tests,
  index,
  checkCur,
  isCheckedCheckbox,
}) => {
  const [loading, setIoading] = useState(false);

  const toglItem = () => {
    setIoading(prevState => !prevState);
  };

  return (
    <tbody className={css.tbody}>
      <tr
        className={css.tr}
        style={isCheckStudent(isCheckedCheckbox || student.checked)}
      >
        <td className={css.td}>
          <div className={css.checkbox}>
            <input
              type="checkbox"
              checked={student.checked}
              index={index}
              onChange={() => checkCur(index)}
            />
          </div>
        </td>
        <td className={css.td}>
          <div className={css.name}>{name}</div>
        </td>
        <td className={css.td}>
          <div className={css.id}>{id}</div>
        </td>
        <td className={`${css.td} ${css.class}`}>{classs}</td>
        <td className={css.td}>
          <div className={css.score} style={{ color: colorFilterScore(score) }}>
            {score}
          </div>
        </td>
        <td className={css.td}>
          <div className={css.speed} style={{ color: colorFilterSpeed(speed) }}>
            {speed}
          </div>
        </td>
        <td className={`${css.td} ${css.parents}`}>{parents.join(', ')}</td>
        <td className={css.td}>
          <div className={css.action}>
            <span className={css.arrowAction} onClick={toglItem}></span>
          </div>
        </td>
      </tr>
      {loading && (
        <tr>
          <td className={css.wrapperSecond}>
            <div className={css.wrapper}>
              <StudentResults
                name={name}
                id={id}
                score={score}
                speed={speed}
                tests={tests}
                onClose={toglItem}
              />
            </div>
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default Tbody;
