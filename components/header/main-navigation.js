import { Fragment, useState } from 'react';
import Link from 'next/link';
import HeaderNavLink from './header-nav-link';
import LightDarkIcon from './light-dark-icon';

import classes from '../../styles/modules/main-navigation.module.scss';

function MainNavigation({ toggleTheme }) {
  const [rotate, setRotate] = useState(classes["open-list"]);

  const mobileNav = () => {
    if (rotate === classes["open-list"]) {
      setRotate(classes["exit-list"]);
    } else {
      setRotate(classes["open-list"]);
    }
  }

  return (
    <Fragment>
      <header className={`${classes.mobileHeader} ${rotate}`}>
        <div className='icon-bg' onClick={mobileNav}>
          <span className={classes.line1} />
          <span className={classes.line2} />
          <span className={classes.line3} />
        </div>
        <ul onClick={mobileNav}>
          <LightDarkIcon toggleTheme={toggleTheme} />
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about-me'>About Me</Link>
          </li>
          <li>
            <Link href='/about-the-site'>About the Site</Link>
          </li>
          <li>
            <Link href='/projects'>Projects</Link>
          </li>
          <li>
            <Link href='/resume'>Resume</Link>
          </li>
        </ul>
      </header>
      <header className={classes.desktopHeader}>
        <ul>
          <LightDarkIcon toggleTheme={toggleTheme} />
          <HeaderNavLink hLink="/" text="Home" />
          <HeaderNavLink hLink="/about-me" text="About Me" />
          <HeaderNavLink hLink="/about-the-site" text="About The Site" />
          <HeaderNavLink hLink="/projects" text="Projects" />
          <HeaderNavLink hLink="/resume" text="Resume" />
        </ul>
      </header>
    </Fragment>
  );
}

export default MainNavigation;
