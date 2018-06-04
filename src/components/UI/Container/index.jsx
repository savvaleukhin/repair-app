import React from 'react';
import styles from './container.module.less';

const Container = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default Container;
