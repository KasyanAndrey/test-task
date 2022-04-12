import React from 'react';
import css from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={css.nav}>
      <NavLink
        to="/analytics"
        className={navData =>
          navData.isActive ? `${css.activeLink} ${css.link}` : `${css.link}`
        }
      >
        Analytics
      </NavLink>

      <NavLink
        to="/gradebooks"
        className={navData =>
          navData.isActive ? `${css.activeLink} ${css.link}` : `${css.link}`
        }
      >
        Gradebooks
      </NavLink>

      <NavLink
        to="/tests"
        className={navData =>
          navData.isActive ? `${css.activeLink} ${css.link}` : `${css.link}`
        }
      >
        Tests
      </NavLink>

      <NavLink
        to="/students"
        className={navData =>
          navData.isActive ? `${css.activeLink} ${css.link}` : `${css.link}`
        }
      >
        Students
      </NavLink>

      <NavLink
        to="/teachers"
        className={navData =>
          navData.isActive ? `${css.activeLink} ${css.link}` : `${css.link}`
        }
      >
        Teachers
      </NavLink>
      <NavLink
        to="/archive"
        className={navData =>
          navData.isActive ? `${css.activeLink} ${css.link}` : `${css.link}`
        }
      >
        Archive
      </NavLink>
    </nav>
  );
};

export default Navbar;
