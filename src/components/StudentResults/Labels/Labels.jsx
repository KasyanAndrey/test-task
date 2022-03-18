import React from "react";
import css from "./Labels.module.css";

const Labels = () => {
  return (
    <div className={css.labels}>
      <div className={css.labelsBox}>
        <h3 className={css.title}>score</h3>
        <p className={css.blue}>90%+ accuracy</p>
        <p className={css.green}>80 - 89% accuracy</p>
        <p className={css.yellow}>50 - 79% accuracy</p>
        <p className={css.red}>below 50% accuracy</p>
      </div>
      <div className={css.labelsBox}>
        <h3 className={css.title}>speed</h3>
        <p className={css.blue}>above expected</p>
        <p className={css.green}>as expected</p>
        <p className={css.yellow}>below expected</p>
      </div>
    </div>
  );
};
export default Labels;
