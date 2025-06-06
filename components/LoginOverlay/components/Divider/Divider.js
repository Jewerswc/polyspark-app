import React from 'react';
import styles from './Divider.module.css';

export default function Divider() {
  return (
    <div className={styles.divider}>
      <span className={styles.text}>OR</span>
    </div>
  );
}
