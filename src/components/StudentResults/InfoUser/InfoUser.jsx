import React from "react";
import css from "./InfoUser.module.css";

const InfoUser = ({ items }) => {
  return (
    <div className={css.infoUser}>
      {items.map(({ name, id }) => (
        <div className={css.user}>
          <div className={css.userItem}>
            STUDENT:
            <span className={css.userData}>{name}</span>
          </div>
          <div className={css.userItem}>
            ID:
            <span className={css.userData}>{id}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default InfoUser;
