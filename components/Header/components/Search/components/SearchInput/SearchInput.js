import React, { useContext, useEffect, useRef, useState } from 'react';
import {SearchContext}  from './../../../../../../pages/api/SearchContext';
import styles from './SearchInput.module.css';
import SearchResultsPlaceholder from './../SearchResultsPlaceholder/SearchResultsPlaceholder';

export default function SearchInput() {
  const { query, setQuery } = useContext(SearchContext);
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query.startsWith('TAG:') && inputRef.current) {
      inputRef.current.focus();
    }
  }, [query]);

  return (
    <div className={styles.searchWrapper}>
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
          ref={inputRef}
          className={styles.searchInput}
          type="text"
          placeholder="Search Agents"
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          value={query}
          onChange={handleInputChange}
        />
      </div>
      {isActive && (
        <div className={styles.placeholderWrapper}>
          <SearchResultsPlaceholder query={query} />
        </div>
      )}
    </div>
  );
}
