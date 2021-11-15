import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from 'store/actions/dataAction';

import styles from 'styles/Content.module.scss';

const Content = () => {
  const data = useSelector((state) => state.data.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const dataDisplay = data.map((item, index) => {
    return <li key={index}>{item.title}</li>;
  });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <ul>Content</ul>
      </div>
    </div>
  );
};

export default Content;
