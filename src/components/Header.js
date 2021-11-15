import React from 'react';
import styles from 'styles/Header.module.scss';
import HeaderDown from './layout/HeaderDown';

import HeaderUp from './layout/HeaderUp';

const Header = () => {
  return (
    <div className={styles.container}>
      <HeaderUp />
      <HeaderDown />
    </div>
  );
};

export default Header;
