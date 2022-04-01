import css from './TableBody.module.css';

const TableBody = ({ students }) => {
  return (
    <tbody className={css.thead}>
      {students.map(({ tests, id }) =>
        tests.map(
          (
            { label, score, speed, total, expSpeed, concept, date },
            index
          ) => (
            <tr className={css.tr} key={id}>
              <tb className={`${css.tb} ${css.num}`}>{index}</tb>
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
          )
        )
      )}
    </tbody>
  );
};

export default TableBody;
