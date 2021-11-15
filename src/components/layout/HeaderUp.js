import React from 'react';
import Image from 'next/image';
import logo from 'images/nhaLogo.png';
import styles from 'components/layout/HeaderUp.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faSmileBeam,
  faCommentDots,
  faBell,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const HeaderUp = () => {
  return (
    <div className={styles.container}>
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
          <Link href="/">
            <a>
              <FontAwesomeIcon className={styles.icon} icon={faHome} />
              <span>Trang chủ</span>
            </a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/">
            <a>
              <FontAwesomeIcon icon={faSmileBeam} className={styles.icon} />
              <span>Quản lý tin</span>
            </a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/">
            <a>
              <FontAwesomeIcon icon={faCommentDots} className={styles.icon} />
              <span>Chat</span>
            </a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/">
            <a>
              <FontAwesomeIcon icon={faBell} className={styles.icon} />
              <span>Thông báo</span>
            </a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/">
            <a>
              <FontAwesomeIcon icon={faEllipsisH} className={styles.icon} />
              <span>Thêm</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderUp;
