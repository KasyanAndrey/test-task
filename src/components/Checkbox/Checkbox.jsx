export const Checkbox = ({ checked, onChangeHandler, idx }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onChangeHandler(idx)}
      />
    </div>
  );
};
