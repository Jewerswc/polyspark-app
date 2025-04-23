import React from 'react';
import styles from './MoreButton.module.css';

export default function MoreButton({ onClick }) {
  return (
    <button
      className={styles.moreButton}
      onClick={onClick}
      aria-label="More"
      type="button"
    >
      <div className={styles.svgWrapper}>
        <svg
          viewBox="0 0 15 13"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className={styles.icon}
        >
          <path
            d="M1.67499 1.6499H13.675"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M1.67499 6.6499H13.675"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M1.67499 11.6499H13.675"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className={styles.label}>More</span>
    </button>
  );
}
