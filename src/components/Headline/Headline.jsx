import React from "react";
import css from "./Headline.module.css";

import Searchbar from "./Searchbar/Searchbar";
import Uploadbar from "./Uploadbar/Uploadbar";

const Headline = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Students</h1>
      <Searchbar />
      <Uploadbar />
    </div>
  );
};

export default Headline;
