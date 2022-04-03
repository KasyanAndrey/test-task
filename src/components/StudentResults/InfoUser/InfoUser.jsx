import React from "react";
import css from "./InfoUser.module.css";
import { v4 as uuidv4 } from 'uuid';


const InfoUser = ({ name, id }) => {
  return (
    <div className={css.infoUser}>
        <div className={css.user} key={uuidv4()}>
          <div className={css.userItem}>
            STUDENT:
            <span className={css.userData}>{name}</span>
          </div>
          <div className={css.userItem}>
            ID:
            <span className={css.userData}>{id}</span>
          </div>
        </div>
    </div>
  );
};
export default InfoUser;

/* const InfoUser = ({ student }) => {
  return (
    <div className={css.infoUser}>
      {student.map(({ name, id }) => (
        <div className={css.user} key={uuidv4()}>
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
export default InfoUser; */
