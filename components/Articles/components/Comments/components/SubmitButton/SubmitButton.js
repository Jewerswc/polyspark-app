// components/Articles/components/Comments/components/SubmitButton/SubmitButton.jsx
import React from 'react';
import styles from './SubmitButton.module.css';

export default function SubmitButton({ label, onClick, onChatClick, buttonColor, disabled = false, }) {
  return (
    <button 
      className={styles.submitButton} 
      onClick={onClick}
      disabled={disabled}
    >
      Submit
    </button>
  );
}
