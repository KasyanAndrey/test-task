import css from './Tbody.module.css';
import { useState } from 'react';

import StudentResults from '../../StudentResults/StudentResults';

const Tbody = ({ items }) => {
  const [showItems, setShowItems] = useState(false);

  const toglItem = () => {
    setShowItems(prevState => !prevState);
  };

  return (
    <tbody className={css.tbody}>
      {items.map(({ name, id, classs, score, speed, parents }) => (
        <tr className={css.tr} key={id}>
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
          <td className={`${css.td} ${css.parents}`}>{parents}</td>
          <td className={css.td}>
            <div className={css.action}>
              <span className={css.arrowAction} onClick={toglItem}></span>
            </div>
          </td>
        </tr>
      ))}
      {showItems && <StudentResults items={items} />}
    </tbody>
  );
};

export default Tbody;
