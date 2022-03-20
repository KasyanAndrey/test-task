import css from './Pagination.module.css';

const Pagination = ({onForward, onBack }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.pagBox}>
        <div className={css.page}>
          <div className={css.title}>Rows per page: </div>
          <div className={css.numPage}>
            10<span className={css.aroowduwn}></span>
          </div>
          <div className={css.arrowdawn}></div>
        </div>
        <div className={css.item}>21-30 of 100</div>
        <div className={css.arrowbox}>
          <button
            type="button"
            className={css.arrowleft}
            onClick={() => onBack()}
          ></button>
          <button
            type="button"
            className={css.arrowright}
            onClick={() => onForward()}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
