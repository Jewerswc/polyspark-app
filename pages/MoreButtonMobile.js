import React from 'react';
import styles from './HomeButton.module.css';

export default function HomeButton({ onClick }) {
  return (
    <button
      className={styles.homeButton}
      onClick={onClick}
      aria-label="Home"
    >
        <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.67499 1.6499H13.675" stroke="#828282" stroke-width="2" stroke-linecap="round"/>
        <path d="M1.67499 6.6499H13.675" stroke="#828282" stroke-width="2" stroke-linecap="round"/>
        <path d="M1.67499 11.6499H13.675" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>



      <span className={styles.label}>More</span>

    </button>
  );
}
