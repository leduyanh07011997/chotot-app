import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faSearch,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import styles from './HeaderDown.module.scss';

const HeaderDown = () => {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <input
          type="text"
          className={styles.input}
          placeholder="Bất động sản"
        ></input>
        <FontAwesomeIcon icon={faSearch} className={styles.iconSearch} />
      </div>
      <div className={styles.login}>
        <FontAwesomeIcon
          className={`${styles.icon} ${styles.iconLogin}`}
          icon={faUserCircle}
        />
        Đăng nhập
      </div>
      <div className={styles.post}>
        <FontAwesomeIcon
          className={`${styles.icon} ${styles.iconPost}`}
          icon={faEdit}
        />
        ĐĂNG TIN
      </div>
    </div>
  );
};

export default HeaderDown;
