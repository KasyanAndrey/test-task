import React from "react";
import css from "./Searchbar.module.css";

const Searchbar = () => {
  return (
    <div className={css.wrapper}>
      <form /* onSubmit={handleSubmit} */ className={css.form}>
        <input
          className={css.input}
          type="text"
          name="searchQuery"
          placeholder="Enter Student Name, Parent or ID here"
          // value={query}
          // onChange={handleChange}
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