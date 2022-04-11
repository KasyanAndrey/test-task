import React from 'react';
import css from './Selectedline.module.css';
import { CSVLink } from 'react-csv';
import { headers } from '../../helpers/headers';

const Selectedline = ({ state, cancelSelected, choseStudet }) => {
  // debugger
  return (
    <div className={css.wrapper}>
      <p className={css.title}>{choseStudet.length} Student selected</p>
      <div className={css.selectedBar}>
        <batton className={css.btnCancel} onClick={() => cancelSelected()}>
          <span className={css.iconBtnCancel}></span>cancel selection
        </batton>
        <CSVLink className={css.btnExport} headers={headers} data={state} separator={';'}>
            <span className={css.iconBtnExport}></span>export csv
        </CSVLink>
        <batton className={css.btnArchive}>
          <span className={css.iconBtnArchive}></span>archive selected
        </batton>
      </div>
    </div>
  );
};

export default Selectedline;
