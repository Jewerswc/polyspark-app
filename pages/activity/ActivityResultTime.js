// FeedCardTitle.jsx
import React from 'react';
import styles from './ActivityResultTime.module.css';

export default function FeedCardTitle({ text, onClick, buttonColor }) {
  return (
    <button 
      className={styles.postTag} 
      onClick={onClick}
    >
      {text}
    </button>
  );
}
