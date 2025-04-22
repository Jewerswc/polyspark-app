import React from 'react';
import styles from './../ActivityHeader.module.css';

export default function ArticleTitle({ onClick }) {
  return (
    <div 
      className={styles.activityTitle} 
      onClick={onClick}
    >
    Latest Activity
    </div>
  );
}
