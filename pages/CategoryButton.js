import React from 'react';
import styles from './CategoryButton.module.css';

export default function CategoryButton({label, onClick }) {
  return (
    <button 
      className={styles.categoryButton} 
      onClick={onClick}
    >
      {label}
    </button>
  );
}
