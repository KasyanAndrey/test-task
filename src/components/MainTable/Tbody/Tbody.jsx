import css from './Tbody.module.css';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

import StudentResults from '../../StudentResults/StudentResults';

const Tbody = ({ index, name, id, classs, score, speed, parents, tests }) => {
  const [loading, setIoading] = useState(false);

  const toglItem = () => {
    setIoading(prevState => !prevState);
  };

  return (
    <tbody className={css.tbody}>
      <tr className={css.tr} key={uuidv4()}>
        <td className={css.td}>
          <div className={css.checkbox}>
            <input type="checkbox" />
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
          <div className={css.score}>{score}</div>
        </td>
        <td className={css.td}>
          <div className={css.speed}>{speed}</div>
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
            index={index}
          />
        </tr>
      )}
    </tbody>
  );
};

export default Tbody;
