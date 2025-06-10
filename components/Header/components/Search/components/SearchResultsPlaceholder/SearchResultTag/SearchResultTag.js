// SearchResultTag.js (or similar)
import React from 'react';
import styles from './SearchResultTag.module.css';

export default function Tag({ text, onClick }) {
  return (
    <button
      className={styles.tag}
      onClick={onClick}
      type="button"
    >
      {text}
    </button>
  );
}
