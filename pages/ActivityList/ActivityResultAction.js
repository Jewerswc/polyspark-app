// FeedCardTitle.jsx
import React from 'react';
import styles from './ActivityResultAction.module.css';

export default function FeedCardTitle({ text, onClick, buttonColor }) {
  return (
    <button 
      className={styles.postTag} 
      style={{ backgroundColor: buttonColor }}
      onClick={onClick}
    >
      Can you really write an entire operating system in 1,000 lines of python?
    </button>
  );
}
