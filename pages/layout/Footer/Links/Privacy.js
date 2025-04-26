import React from 'react';
import styles from './../FooterLinks.module.css';

export default function ChatNowButton({onClick, }) {
  return (
    <button 
      className={styles.allButton} 
      onClick={onClick}
    >
      Privacy
    </button>
  );
}