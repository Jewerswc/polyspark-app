
import React from 'react';
import styles from './ProfilePubDate.module.css';

export default function FeedCardTitle({ text, onClick, buttonColor }) {
  return (
    <button 
      className={styles.articleTitle} 
      onClick={onClick}
    >
        Mar 17, 2025
    </button>
  );
}
