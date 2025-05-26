// PostTag.jsx
import React, { useContext } from 'react';
import styles from './PostTag.module.css';
import { SearchContext } from '../../../../pages/api/SearchContext';
import clsx from 'clsx';

export default function PostTag({ text, indicator = false }) {
  const { setQuery } = useContext(SearchContext);

  const handleClick = () => {
    // don’t trigger a search when clicking the “+N” indicator
    if (!indicator) setQuery(text);
  };

  return (
    <button
      className={clsx(
        styles.postTag,
        indicator && styles.indicatorTag
      )}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
