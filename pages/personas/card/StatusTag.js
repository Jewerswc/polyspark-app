import React from 'react';
import styles from './Status.module.css';

export default function StatusTag({
  text = 'Active Now',
  dotColor = '#00E81B'
}) {
  return (
    <div className={styles.tag}>
      <span className={styles.dot} style={{ backgroundColor: dotColor }} />
      <span className={styles.text}>{text}</span>
    </div>
  );
}
