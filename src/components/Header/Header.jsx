import React from 'react';
import css from './Header.module.css';

import Navbar from './Navbar/Navbar';
import Logo from './Logo/Logo';
import User from './User/User';

const Header = () => {
  return (
    <header className={css.header}>
      <Logo />
      <Navbar />
      <User />
    </header>
  );
};

export default Header;
