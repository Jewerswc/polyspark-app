import React from 'react';
import styles from './ChatNowButton.module.css';

export default function ChatNowButton({ label, onClick, buttonColor }) {
  return (
    <button 
      className={styles.allButton} 
      onClick={onClick}
      style={{ '--buttonColor': buttonColor }}
    >
      Chat Now
    </button>
  );
}
