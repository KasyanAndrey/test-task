import React from "react";
import css from "./InfoUser.module.css";

const InfoUser = (props) => {
  return (
    <div className={css.infoUser}>
      <div className={css.user}>
        <div className={css.userItem}>
          STUDENT: <span className={css.userData}>Nicole Kidman</span>
        </div>
        <div className={css.userItem}>
          ID: <span className={css.userData}>7512552212</span>
        </div>
      </div>
    </div>
  );
};
export default InfoUser;
