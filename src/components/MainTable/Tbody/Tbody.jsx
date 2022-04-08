import css from './Tbody.module.css';
import { useState } from 'react';

import StudentResults from '../../StudentResults/StudentResults';
import { colorFilterScore, colorFilterSpeed } from '../../../helpers/colors';
import { Checkbox } from '../../Checkbox/Checkbox';

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
  checkCur
}) => {
  const [loading, setIoading] = useState(false);

  const toglItem = () => {
    setIoading(prevState => !prevState);
  };
// debugger
  return (
    <tbody className={css.tbody}>
      <tr className={css.tr}>
        <td className={css.td}>
          <div className={css.checkbox}>
            <Checkbox
              checked={student.checked}
              index={index}
              onChangeHandler={checkCur}
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
          <StudentResults
            name={name}
            id={id}
            score={score}
            speed={speed}
            tests={tests}
            onClose={toglItem}
          />
        </tr>
      )}
    </tbody>
  );
};

export default Tbody;
