import css from "./Tarhived.module.css";

const Tarhived = ({ items }) => {
  return (
    <tbody className={css.tbody}>
      {items.map(({ name, id, classs, score, speed, parents }) => (
        <tr className={css.tr} key={id}>
          <td className={css.td}>
            <div className={css.checkbox}>
              <input type="checkbox" />
            </div>
          </td>
          <td className={css.td}>
            <div className={css.name}>{name}</div>
          </td>
          <td className={css.td}>
            <div className={css.id}>{id}</div>
          </td>
          <td className={`${css.td} ${css.class}`}>{classs}</td>
          <td className={css.td}>
            <div className={css.score}>{score}</div>
          </td>
          <td className={css.td}>
            <div className={css.speed}>{speed}</div>
          </td>
          <td className={`${css.td} ${css.parents}`}>{parents}</td>
          <td className={css.td}>
            <div className={css.action}>
              <span className={css.arrowAction}></span>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Tarhived;
