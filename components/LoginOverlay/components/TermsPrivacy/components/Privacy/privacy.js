import React from 'react';
import styles from './privacy.module.css';

export default function Privacy({ onClick }) {
  return (
    <span className={styles.privacy} onClick={onClick}>
      Privacy
    </span>
  );
}
