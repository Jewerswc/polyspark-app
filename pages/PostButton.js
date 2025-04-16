import React from 'react';
import styles from './PostButton.module.css';

export default function ChatNowButton({ onClick, buttonColor }) {
  return (
    <button 
      className={styles.postButton} 
      onClick={onClick}
    >
      Post
    </button>
  );
}
