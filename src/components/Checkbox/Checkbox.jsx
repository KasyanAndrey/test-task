import React from "react";
// import s from "./Checkbox.module.css";

let Checkbox = ({ handleClick, isChecked }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          onChange={() => handleClick()}
          checked={isChecked}
        />
      </label>
    </div>
  );
};

export default Checkbox;
