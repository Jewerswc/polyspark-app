import React from 'react';
import styles from './terms.module.css';

export default function Terms({ onClick }) {
  return (
    <span className={styles.terms} onClick={onClick}>
      Privacy
    </span>
  );
}
