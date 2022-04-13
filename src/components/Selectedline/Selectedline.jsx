import React from 'react';
import css from './Selectedline.module.css';
import { CSVLink } from 'react-csv';
import { headers } from '../../helpers/headers';

const Selectedline = ({ state, cancelSelected, choseStudet }) => {
  return (
    <div className={css.wrapper}>
      <p className={css.title}>{choseStudet()} Student selected</p>
      <div className={css.selectedBar}>
        <button className={css.btnCancel} onClick={() => cancelSelected()}>
          <span className={css.iconBtnCancel}></span>cancel selection
        </button>
        <CSVLink
          className={css.btnExport}
          headers={headers}
          data={state}
          separator={';'}
        >
          <span className={css.iconBtnExport}></span>export csv
        </CSVLink>
        <button className={css.btnArchive}>
          <span className={css.iconBtnArchive}></span>archive selected
        </button>
      </div>
    </div>
  );
};

export default Selectedline;
