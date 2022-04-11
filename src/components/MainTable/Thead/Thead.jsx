import css from './Thead.module.css';

const Thead = ({ isCheckedCheckbox, checkAll, sortByStudents }) => {
  return (
    <thead className={css.thead}>
      <tr className={css.tr}>
        <th className={css.th}>
          <div className={css.checkbox}>
            <input
              type="checkbox"
              checked={isCheckedCheckbox}
              onChange={checkAll}
            />
          </div>
        </th>
        <th className={css.th}>
          <div className={css.name}>
            Name
            <span className={css.az} onClick={sortByStudents} id="name"></span>
          </div>
        </th>
        <th className={css.th}>
          <div className={css.id}>ID</div>
        </th>
        <th className={css.th}>
          <div className={css.class}>
            Class
            <span
              className={css.arrow}
              onClick={sortByStudents}
              id="class"
            ></span>
          </div>
        </th>
        <th className={css.th}>
          <div className={css.score}>
            Av.Score,%
            <span
              className={css.arrow}
              onClick={sortByStudents}
              id="score"
            ></span>
          </div>
        </th>
        <th className={css.th}>
          <div className={css.speed}>
            Av.Speed
            <span
              className={css.arrow}
              onClick={sortByStudents}
              id="speed"
            ></span>
          </div>
        </th>
        <th className={`${css.th} ${css.parents}`}>Parents</th>
        <th className={`${css.th} ${css.actions}`}>Actions</th>
      </tr>
    </thead>
  );
};

export default Thead;
