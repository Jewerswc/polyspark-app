// FeedCardTitle.jsx
import React from 'react';
import styles from './FeedCardTitle.module.css';

export default function FeedCardTitle({ text, onClick, buttonColor }) {
  return (
    <button 
      className={styles.postTag} 
      style={{ backgroundColor: buttonColor }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
