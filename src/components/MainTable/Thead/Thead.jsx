import css from './Thead.module.css';

const Thead = ({ isCheckedCheckbox, checkAll }) => {
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
            Name<span className={css.az}></span>
          </div>
        </th>
        <th className={css.th}>
          <div className={css.id}>
            ID<span className={css.arrow}></span>
          </div>
        </th>
        <th className={`${css.th} ${css.class}`}>Class</th>
        <th className={css.th}>
          <div className={css.score}>
            Av.Score,%<span className={css.arrow}></span>
          </div>
        </th>
        <th className={css.th}>
          <div className={css.speed}>
            Av.Speed<span className={css.arrow}></span>
          </div>
        </th>
        <th className={`${css.th} ${css.parents}`}>Parents</th>
        <th className={`${css.th} ${css.actions}`}>Actions</th>
      </tr>
    </thead>
  );
};

export default Thead;
