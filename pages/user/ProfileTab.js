import React from 'react';
import styles from './ProfileTab.module.css';

export default function ChatNowButton({ label, onClick, onChatClick, buttonColor }) {
  return (
    <button 
      className={styles.chatnowButton} 
      onClick={onClick}
    >
      Profile
    </button>
  );
}
