import React from 'react';
import css from './Headline.module.css';

import Searchbar from './Searchbar/Searchbar';
import Uploadbar from './Uploadbar/Uploadbar';

const Headline = ({ state, onSubmit, handleResetPage }) => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title} onClick={() => handleResetPage()}>
        Students
      </h1>
      <Searchbar onSubmit={onSubmit} />
      <Uploadbar state={state}/>
    </div>
  );
};

export default Headline;
