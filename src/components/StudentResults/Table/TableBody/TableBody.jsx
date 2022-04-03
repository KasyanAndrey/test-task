import css from './TableBody.module.css';
import { v4 as uuidv4 } from 'uuid';

const TableBody = ({ tests }) => {
  return (
    <tbody className={css.thead}>
      {tests.map(({label, score, speed, total, expSpeed, concept, date}, index) => {
        return <tr className={css.tr} key={uuidv4()}>
        <tb className={`${css.tb} ${css.num}`}>{index + 1}</tb>
        <tb className={`${css.tb} ${css.testLabel}`}>{label}</tb>
        <tb className={`${css.tb} ${css.score}`}>{score}</tb>
        <tb className={`${css.tb} ${css.speed}`}>{speed}</tb>
        <tb className={`${css.tb} ${css.totalQ}`}>{total}</tb>
        <tb className={`${css.tb} ${css.expSpeed}`}>{expSpeed}</tb>
        <tb className={`${css.tb} ${css.concept}`}>{concept}</tb>
        <tb className={`${css.tb} ${css.date}`}>{date}</tb>
        <tb className={`${css.tb} ${css.checkbox}`}>
          <input type="checkbox" />
        </tb>
      </tr>
      })}
    </tbody>
  );
};

export default TableBody;