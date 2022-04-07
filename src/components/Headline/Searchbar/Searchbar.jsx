import React from 'react';
import { useState } from 'react';
import css from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(query);
    setQuery('');
  };

  return (
    <div className={css.wrapper}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          type="text"
          placeholder="Enter Student Name"
          value={query}
          onChange={handleChange}
          autoComplete="off"
        />
        <button type="submit" className={css.formBtn}>
          <span className={css.formBtnLabel}></span>
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
