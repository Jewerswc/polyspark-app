import React from 'react';
import styles from './SubmitButton.module.css';

export default function SubmitButton({ label, onClick, onChatClick, buttonColor }) {
  return (
    <button 
      className={styles.submitButton} 
      onClick={onClick}
    >
      Chat Now
    </button>
  );
}
