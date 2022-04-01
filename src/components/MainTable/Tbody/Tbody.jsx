import css from './Tbody.module.css';
import { useState } from 'react';

import StudentResults from '../../StudentResults/StudentResults';

const Tbody = ({ students }) => {
  const [loading, setIoading] = useState(false);

  const toglItem = () => {
    setIoading(prevState => !prevState);
  };

  return (
    <tbody className={css.tbody}>
      {students.map(({ name, id, classs, score, speed, parents }, index) => (
        <tr className={css.tr} key={index}>
          <td className={css.td} >
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
          <td className={`${css.td} ${css.class}`}>
            {classs}
          </td>
          <td className={css.td}>
            <div className={css.score}>{score}</div>
          </td>
          <td className={css.td}>
            <div className={css.speed}>{speed}</div>
          </td>
          <td className={`${css.td} ${css.parents}`}>
            {parents}
          </td>
          <td className={css.td}>
            <div className={css.action}>
              <span className={css.arrowAction} onClick={toglItem}></span>
            </div>
          </td>
        </tr>
      ))}
      {loading && <StudentResults students={students} />}
    </tbody>
  );
};

export default Tbody;
