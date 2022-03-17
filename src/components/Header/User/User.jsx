import React from "react";
import css from "./User.module.css";

const User = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.img}></div>
      <button class={css.dropBtn}>
        <span className={css.arrow}></span>
      </button>
    </div>
  );
};

export default User;
