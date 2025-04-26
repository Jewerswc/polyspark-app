// src/layout/Header/Search/SearchInputMobile.jsx
import React, { useContext, useEffect, useRef, useState } from 'react';
import { SearchContext } from '../../../api/SearchContext';
import SearchResultsOverlay from './../../../SearchResultsOverlay';
import styles from './SearchInputMobile.module.css';

export default function SearchInputMobile() {
  const { query, setQuery } = useContext(SearchContext);
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    if (query.startsWith('TAG:') && inputRef.current) {
      inputRef.current.focus();
    }
  }, [query]);

  return (
    <div className={styles.searchWrapper}>
      <div className={styles.searchContainer}>
        {/* …your SVG icon… */}
        <input
          ref={inputRef}
          className={styles.searchInput}
          type="text"
          placeholder="Search Agents"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
        />
      </div>

      {isActive && (
        <div className={styles.placeholderWrapper}>
          <SearchResultsOverlay />
        </div>
      )}
    </div>
  );
}
