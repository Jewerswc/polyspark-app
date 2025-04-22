import React from 'react';
import styles from './ActivityTimeAgo.module.css';

export default function ArticleTitle({  onClick }) {
  return (
    <button 
      className={styles.activityTitle} 
      onClick={onClick}
    >
      3m Ago
    </button>
  );
}
