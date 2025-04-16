// PostTag.jsx
import React from 'react';
import styles from './AuthorTag.module.css';

export default function PostTag({ text, onClick }) {
  return (
    <button 
      className={styles.postTag} 
      onClick={onClick}
    >
      Alex Doe
    </button>
  );
}
