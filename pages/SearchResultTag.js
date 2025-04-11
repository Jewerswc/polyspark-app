import React from 'react';
import styles from './SearchResultTag.module.css';

export default function Tag({ text, onClick }) {
  return (
    <span className={styles.tag} onClick={onClick}>
      {text}
    </span>
  );
}
