import React from "react";
import css from "./InfoSort.module.css";

const InfoSort = () => {
  return (
    <div className={css.infoSort}>
      <div class={css.dropdown}>
        <button class={css.dropBtn}>
          All concepts<span className={css.arrow}></span>
        </button>
        <button class={css.dropBtn}>
          All score<span className={css.arrow}></span>
        </button>
        <button class={css.dropBtn}>
          All speed<span className={css.arrow}></span>
        </button>
      </div>

      <div className={css.date}>
        <form>
          <input className={css.input} type="date"/>
        </form>
        <div className={css.loader}></div>
      </div>
    </div>
  );
};
export default InfoSort;
