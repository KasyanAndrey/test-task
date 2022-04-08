import { useState } from 'react';
import css from './Tbody.module.css';

import StudentResults from '../../StudentResults/StudentResults';
import { colorFilterScore, colorFilterSpeed } from '../../../helpers/colors';

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
}) => {
  const [loading, setIoading] = useState(false);

  const toglItem = () => {
    setIoading(prevState => !prevState);
  };

  return (
    <tbody className={css.tbody}>
      <tr className={css.tr}>
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
