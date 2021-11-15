import Head from 'next/head';
import React from 'react';
import styles from '../styles/Layout.module.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chợ Tốt</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Layout;
