import React from 'react';
import styles from './ResultTimeAgo.module.css';

export default function ResultTimeAgo({ text, onClick }) {
  return (
    <button 
      className={styles.resultTimeAgo} 
      onClick={onClick}
    >
      {text}
    </button>
  );
}
