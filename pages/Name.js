import React from 'react';
import styles from './Name.module.css';

export default function ChatNowButton({ label, onClick, onChatClick, buttonColor }) {
  return (
    <div 
      className={styles.chatnowButton} 
      onClick={onClick}
    >
        James Rae
    </div>
  );
}
