import React from 'react';
import styles from './SearchRecent.module.css';

export default function SearchBar({ placeholder = 'Search Recent', iconSrc, value, onChange }) {
  return (
    <div className={styles.searchContainer}>
      {iconSrc && <img src="MGlass.svg" alt="search icon" className={styles.icon} />}
      <input
        type="text"
        className={styles.searchInput}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}