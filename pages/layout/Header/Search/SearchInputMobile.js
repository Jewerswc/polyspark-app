// src/layout/Header/Search/SearchInputMobile.jsx
import React, { useContext, useEffect, useRef, useState } from 'react';
import { SearchContext } from '../../../api/SearchContext';
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
      <div
        className={`${styles.searchContainer} ${
          isActive ? styles.active : ''
        }`}
      >
        {/* 🔍 magnifier icon */}
        <span className={styles.iconWrapper}>
        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.90706 8.7772C9.64152 7.77498 9.97048 6.53239 9.82812 5.29805C9.68576 4.0637 9.08259 2.92862 8.13927 2.11989C7.19596 1.31116 5.98207 0.888435 4.74046 0.936276C3.49885 0.984118 2.32109 1.499 1.4428 2.37792C0.564518 3.25683 0.0504773 4.43496 0.00352442 5.67661C-0.0434285 6.91825 0.380169 8.13183 1.18957 9.07457C1.99897 10.0173 3.13448 10.6197 4.36893 10.7611C5.60338 10.9026 6.84573 10.5728 7.84743 9.83759C7.86968 9.86793 7.8937 9.89701 7.921 9.92482L10.8413 12.8451C10.9835 12.9874 11.1764 13.0674 11.3776 13.0675C11.5788 13.0675 11.7718 12.9877 11.9142 12.8455C12.0565 12.7032 12.1365 12.5103 12.1366 12.3091C12.1366 12.1079 12.0568 11.9149 11.9145 11.7725L8.99429 8.85229C8.96719 8.82483 8.93803 8.80023 8.90706 8.7772ZM9.10276 5.8615C9.10276 6.40935 8.99485 6.95183 8.7852 7.45798C8.57555 7.96412 8.26826 8.42402 7.88087 8.8114C7.49348 9.19879 7.03359 9.50608 6.52745 9.71573C6.0213 9.92538 5.47882 10.0333 4.93097 10.0333C4.38313 10.0333 3.84064 9.92538 3.3345 9.71573C2.82836 9.50608 2.36846 9.19879 1.98107 8.8114C1.59369 8.42402 1.2864 7.96412 1.07675 7.45798C0.867094 6.95183 0.759187 6.40935 0.759187 5.8615C0.759187 4.75508 1.19871 3.69397 1.98107 2.91161C2.76344 2.12924 3.82455 1.68972 4.93097 1.68972C6.0374 1.68972 7.09851 2.12924 7.88087 2.91161C8.66323 3.69397 9.10276 4.75508 9.10276 5.8615Z" fill="#606060"/>
</svg>

        </span>

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

        {/* × clear button */}
        {query && (
          <button
            type="button"
            className={styles.clearBtn}
            onClick={() => setQuery('')}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
}
