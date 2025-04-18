// PostTag.jsx
import React from 'react';
import styles from './AuthorTag.module.css';

export default function AuthorTag({ onClick }) {
  return (
    <button 
      className={styles.authorTag} 
      onClick={onClick}
    >
      Alex Doe
    </button>
  );
}
