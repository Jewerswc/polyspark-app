import React from 'react';
import styles from './ChatNowButton.module.css';

export default function ChatNowButton({ label, onClick, onChatClick, buttonColor }) {
  return (
    <button 
      className={styles.chatnowButton} 
      onClick={onClick}
    >
      Chat Now
    </button>
  );
}
