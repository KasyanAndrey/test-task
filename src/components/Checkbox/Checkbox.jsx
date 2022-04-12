import React from "react";

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
