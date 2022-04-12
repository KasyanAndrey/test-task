import React from 'react';
import css from './Filter.module.css';

const Filter = () => {
  return (
    <div className={css.wrapper}>
      <div class={css.dropdown}>
        <button class={css.dropBtn}>
          Show all<span className={css.arrow}></span>
        </button>
        <button class={css.dropBtn}>
          All grades<span className={css.arrow}></span>
        </button>
        <button class={css.dropBtn}>
          All classes<span className={css.arrow}></span>
        </button>
        <button class={css.dropBtn}>
          Av.score<span className={css.arrow}></span>
        </button>
        <button class={css.dropBtn}>
          Av.speed<span className={css.arrow}></span>
        </button>
        <button class={css.dropBtn}>
          All classes<span className={css.arrow}></span>
        </button>
        <button className={css.dropBtn}>
          <span className={css.closeBtn}></span>Clear all
        </button>
      </div>
    </div>
  );
};

export default Filter;
