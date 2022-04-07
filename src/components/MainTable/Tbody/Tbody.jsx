import css from './Tbody.module.css';
import { useState } from 'react';


import StudentResults from '../../StudentResults/StudentResults';
import { colorFilterScore, colorFilterSpeed } from '../../../helpers/colors';

const Tbody = ({
  name,
  id,
  classs,
  score,
  speed,
  parents,
  tests,
  handleClick,
  isChecked
}) => {
  const [loading, setIoading] = useState(false);
  // const [isCheck, setIsCheck] = useState([]);
  // const [selected, setSelected] = useState(false);

  const toglItem = () => {
    setIoading(prevState => !prevState);
  };

  // const handleClick = event => {
  //   const { id, checked } = event.target;
  //   setIsCheck([...isCheck, id]);
  //   if (!checked) {
  //     setIsCheck(isCheck.filter(item => item !== id));
  //   }
  // };
  // console.log(isCheck);

  return (
    <tbody className={css.tbody}>
      <tr className={css.tr}>
        <td className={css.td}>
          <div className={css.checkbox}>
            <input
              type="checkbox"
              name={name}
              id={id}
              onChange={handleClick}
              checked={isChecked.includes(id)}
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
