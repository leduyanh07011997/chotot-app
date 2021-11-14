import React from 'react';
import styles from 'styles/Header.module.scss';

import HeaderUp from './layout/HeaderUp';

const Header = () => {
  return (
    <div className={styles.container}>
      <HeaderUp />
      <div>Header2</div>
    </div>
  );
};

export default Header;
