// FeedCardTitle.jsx
import React from 'react';
import styles from './ActivityResultTitle.module.css';

export default function FeedCardTitle({ onClick }) {
  return (
    <button 
      className={styles.postTag} 
      onClick={onClick}
    >
      Can you really write an entire operating system in 1,000 lines of python?
    </button>
  );
}
