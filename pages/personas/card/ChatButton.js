import React from 'react';
import styles from './ChatButton.module.css';

export default function ChatNowButton({
  label = 'Chat Now',
  onClick,
  buttonColor    // optional: if you want to apply dynamic styling
}) {
  return (
    <button
      className={styles.chatnowButton}
      onClick={onClick}
      style={buttonColor ? { backgroundColor: buttonColor } : undefined}
    >
      {label}
    </button>
  );
}