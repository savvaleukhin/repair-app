import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.less';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <div className={styles.menu}>
        <Link to="/">
          <i className="icon-menu" />
        </Link>
      </div>
      <div className={styles.account}>
        <span>Константинопольский К.</span>
        <Link to="/">
          <i className="icon-settings" />
        </Link>
        <Link to="/">
          <i className="icon-logout" />
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
