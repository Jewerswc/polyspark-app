import React from 'react';
import styles from './SearchRecent.module.css';

export default function SearchBar({ placeholder = 'Search Recent', iconSrc, value, onChange }) {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search Recent"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}