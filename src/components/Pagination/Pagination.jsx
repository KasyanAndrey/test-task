import css from "./Pagination.module.css";

const Pagination = () => {
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
          <span className={css.arrowleft}></span>
          <span className={css.arrowright}></span>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
