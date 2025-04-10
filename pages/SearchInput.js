import React from 'react';
import styles from './SearchInput.module.css';

export default function SearchInput() {
  return (
    <div className={styles.searchContainer}>
      <svg
        className={styles.searchIcon}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 15L19.2 19.2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle
          cx="10"
          cy="10"
          r="6"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search Agents"
      />
    </div>
  );
}
