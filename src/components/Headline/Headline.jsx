import React from 'react';
import css from './Headline.module.css';

import Searchbar from './Searchbar/Searchbar';
import Uploadbar from './Uploadbar/Uploadbar';

const Headline = ({ onSubmit, handleUpdatePage }) => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title} onClick={() => handleUpdatePage()}>
        Students
      </h1>
      <Searchbar onSubmit={onSubmit} />
      <Uploadbar />
    </div>
  );
};

export default Headline;
