// StatusTag.js
import React from 'react';
import styles from './Status.module.css';

export default function StatusTag({
  text = 'Active Now',
  dotColor = '#00E81B'
}) {
  return (
    <div className={styles.tag}>
      {/* Dot */}
      <span
        className={styles.dot}
        style={{ backgroundColor: dotColor }}
      />

      {/* Label */}
      <span className={styles.text}>{text}</span>
    </div>
  );
}
