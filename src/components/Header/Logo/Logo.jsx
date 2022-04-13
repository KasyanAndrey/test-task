import React from 'react';
import css from './Logo.module.css';

const Logo = () => {
  return (
    <div className={css.wrapper}>
      <a href="#s"> </a>
      <div className={css.dropdown}>
        <button className={css.dropBtn}>
          School 1<span className={css.arrow}></span>
        </button>
      </div>
    </div>
  );
};

export default Logo;
