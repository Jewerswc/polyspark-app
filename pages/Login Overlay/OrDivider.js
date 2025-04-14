import React from 'react';
import styles from './OrDivider.module.css';

export default function ORDivider() {
  return (
    <div className={styles.divider}>
      <span className={styles.text}>OR</span>
    </div>
  );
}
