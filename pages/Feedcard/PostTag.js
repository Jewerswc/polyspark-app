// PostTag.jsx
import React from 'react';
import styles from './PostTag.module.css';

export default function PostTag({ text, onClick }) {
  return (
    <button 
      className={styles.postTag} 
      onClick={onClick}
    >
      {text}
    </button>
  );
}
