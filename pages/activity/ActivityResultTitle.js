// FeedCardTitle.jsx
import React from 'react';
import styles from './ActivityResultTitle.module.css';

export default function FeedCardTitle({ onClick, title }) {
  return (
    <button 
      className={styles.postTag} 
      onClick={onClick}
    >
      {title}
    </button>
  );
}
