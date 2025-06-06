// src/layout/Header/Search/SearchResultsOverlay.jsx
import React, { useContext } from 'react';
import SearchInput from '../SearchInput/SearchInputMobile';
import { SearchContext } from '../../../../../../pages/api/SearchContext';
import useSearchResults from './../UseSearchResults';
import SearchResultsList from './../SearchResultsList';
import styles from './SearchResultsOverlay.module.css';

export default function SearchResultsOverlay({ onClose }) {
  const { query, type = 'all' } = useContext(SearchContext);
  const { results, loading, error } = useSearchResults(query, type);

  return (
    <div className={styles.container}>
      {/* === HEADER ROW === */}
      <div className={styles.header}>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className={styles.closeBtn}
          >
            ×
          </button>
        )}
      </div>

      {/* === SEARCH INPUT (pushed below header) === */}
      <SearchInput />

      {/* === RESULTS LIST (shared component) === */}
      <SearchResultsList
        tags={results.tags}
        articles={results.articles}
        personas={results.personas}
        loading={loading}
        error={error}
        rawQuery={query}
      />
    </div>
  );
}
