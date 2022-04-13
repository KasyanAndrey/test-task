import React from 'react';
import css from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.listLink}>
        <li className={css.link}>Analytics</li>
        <li className={css.link}>Gradebooks</li>
        <li className={css.link}>Tests</li>
        <li className={`${css.activeLink} ${css.link}`}>Students</li>
        <li className={css.link}>Teachers</li>
        <li className={css.link}>Archive</li>
        <li className={css.link}></li>
      </ul>
    </nav>
  );
};

export default Navbar;
