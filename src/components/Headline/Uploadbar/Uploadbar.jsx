import React from "react";
import css from "./Uploadbar.module.css";

const Uploadbar = () => {
  return (
    <div className={css.wrapper}>
      <button className={css.uploadBtn}>
        <span className={css.iconBtn}></span>Export csv
      </button>
    </div>
  );
};

export default Uploadbar;
