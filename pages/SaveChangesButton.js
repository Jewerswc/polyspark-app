import React from 'react';
import styles from './SaveChangesButton.module.css';

export default function ChatNowButton({ label, onClick, onChatClick, buttonColor }) {
  return (
    <button 
      className={styles.chatnowButton} 
      onClick={onClick}
    >
      Save Changes
    </button>
  );
}
