import css from './Pagination.module.css';

const Pagination = ({ size, prevPage, nextPage, elemCount, totalCount }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.pagBox}>
        <div className={css.page}>
          <div className={css.title}>Rows per page: </div>
          <div className={css.numPage}>{size}</div>
          <div className={css.arrowdawn}></div>
        </div>
        <div className={css.item}>
          {elemCount} of {totalCount}
        </div>
        <div className={css.arrowbox}>
          <button
            type="button"
            className={css.arrowleft}
            onClick={() => prevPage()}
          ></button>
          <button
            type="button"
            className={css.arrowright}
            onClick={() => nextPage()}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
