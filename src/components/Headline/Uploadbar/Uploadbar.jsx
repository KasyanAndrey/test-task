import React from 'react';
import css from './Uploadbar.module.css';
import { CSVLink } from 'react-csv';
import { headers } from '../../../helpers/headers';

const Uploadbar = ({ state }) => {
  return (
    <div className={css.wrapper}>
      <CSVLink className={css.uploadBtn} headers={headers} data={state} separator={';'}>
        {/* <button className={css.uploadBtn}> */}
          <span className={css.iconBtn}></span>Export csv
        {/* </button> */}
      </CSVLink>
    </div>
  );
};

export default Uploadbar;
