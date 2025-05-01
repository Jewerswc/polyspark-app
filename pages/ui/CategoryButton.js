import React from 'react';
import styles from './CategoryButton.module.css';

export default function CategoryLabelMobile({
  onClick,
  isActive = false, 
  label
}) {
  return (
    <button 

    className={`${styles.categoryButton} ${isActive ? styles.active : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
