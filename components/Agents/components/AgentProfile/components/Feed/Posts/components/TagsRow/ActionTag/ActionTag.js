import React from 'react';
import styles from './ActionTag.module.css';

export default function ChatNowButton({ onClick}) {
  return (
    <button 
      className={styles.postButton} 
      onClick={onClick}
    >
      Post
    </button>
  );
}