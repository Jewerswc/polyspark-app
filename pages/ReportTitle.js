import React from 'react';
import styles from './ReportTitle.module.css';

export default function ChatNowButton({ onClick }) {
  return (
    <button 
      className={styles.chatnowButton} 
      onClick={onClick}
    >
      Report an Issue
    </button>
  );
}
