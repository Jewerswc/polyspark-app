import React from 'react';
import styles from './NavigationButton.module.css';

export default function ChatNowButton({ label, onClick }) {
  return (
    <div
      className={styles.chatnowButton} 
      onClick={onClick}
    >
      {label}
    </div>
  );
}
