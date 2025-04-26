import React from 'react';
import styles from './HomePageDropdownButton.module.css';

export default function HomePageDropdownButton({
    label,
    onClick,

  }) {
    return (
    <button 
      className={styles.HomePageDropdownButton} 
      onClick={onClick}
    >
      {label}
    </button>
  );
}
