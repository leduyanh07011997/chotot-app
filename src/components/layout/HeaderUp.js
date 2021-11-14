import React from 'react';
import Image from 'next/image';
import logo from 'images/nhaLogo.png';
import styles from 'components/layout/HeaderUp.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const HeaderUp = () => {
  return (
    <div className={styles.headerUp}>
      <div href="" className={styles.homeImage}>
        <Image
          id={styles.img}
          src={logo}
          alt="lo go nha"
          width="82px"
          height="35px"
        ></Image>
      </div>
      <ul className={styles.navList}>
        <li className={styles.item}>
          <Link href="">
            <a>
              <FontAwesomeIcon className={styles.icon} icon={faHome} />
              Trang chủ
            </a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="">
            <a>
              <FontAwesomeIcon icon={faHome} className={styles.icon} />
              Quản lý tin
            </a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="">
            <a>
              <FontAwesomeIcon icon={faHome} className={styles.icon} />
              Chat
            </a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="">
            <a>
              <FontAwesomeIcon icon={faHome} className={styles.icon} />
              Thông báo
            </a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="">
            <a>
              <FontAwesomeIcon icon={faHome} className={styles.icon} />
              Thêm
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderUp;
