import css from './Pagination.module.css';
import { Dropdown } from '../Dropdown/Dropdown ';

const Pagination = ({
  nextPage,
  prevPage,
  currentPage,
  itemsPerPage,
  totalItems,
  paginate,
}) => {
  return (
    <div className={css.wrapper}>
      <div className={css.pagBox}>
        <div className={css.page}>
          <div className={css.title}>Rows per page: </div>
          <div className={css.numPage}>
            {currentPage}
            <Dropdown
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              totalItems={totalItems}
              paginate={paginate}
              prevPage={prevPage}
            />
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
