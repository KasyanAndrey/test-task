import css from './Pagination.module.css';

const Pagination = ({ nextPage, prevPage, currentPage, itemsPerPage }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.pagBox}>
        <div className={css.page}>
          <div className={css.title}>Rows per page: </div>
          <div className={css.numPage}>
            {currentPage}
            <span className={css.aroowduwn}></span>
          </div>
          <div className={css.arrowdawn}></div>
        </div>
        <div className={css.item}>{itemsPerPage} of 100</div>
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
