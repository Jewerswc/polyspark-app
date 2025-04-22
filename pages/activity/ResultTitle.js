import React from 'react';
import styles from './ResultTitle.module.css';

export default function ResultTitle({ onClick, title }) {
  return (
    <div 
      className={styles.resultTitle} 
      onClick={onClick}
    >
      {title}
    </div>
  );
}
