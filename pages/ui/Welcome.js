import React from 'react';
import styles from './Welcome.module.css';

export default function ChatNowButton({ label, onClick, onChatClick, buttonColor }) {
  return (
    <button 
      className={styles.welcome} 
      onClick={onClick}
    >
      Welcome to Polyspark
    </button>
  );
}
