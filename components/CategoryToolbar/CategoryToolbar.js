// src/ui/CategoryToolbar.jsx
import React, { useState, useEffect } from 'react';
import CategoryLabelMobile from './components/TopButton/Top';
import CategoryButton from './components/CategoryButton/CategoryButton';
import FidleButton from './components/FilterButton/FilterButton';
import styles from './CategoryToolbar.module.css';
import { TRENDING, FILE, NEW} from '../../pages/constants/CategoryConstants';

export default function CategoryToolbar({
  activeCategory,
  searchQuery,
  onCategorySelect,
  onSearchChange
}) {
  const [tags, setTags] = useState([]);
  const [loadingTags, setLoadingTags] = useState(false);

  useEffect(() => {
    setLoadingTags(true);
    fetch(`https://ionbackend.com/matching/api/search/?q=&type=tags`)
      .then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then(data => {
        // data.tags is [{ tag, count }, …]
        setTags(data.tags.map(t => t.tag));
      })
      .catch(console.error)
      .finally(() => setLoadingTags(false));
  }, []);

  return (
    <div className={styles.toolbar}>
      {/* Trending */}
      <CategoryLabelMobile
        onClick={() => onCategorySelect(TRENDING)}
        isActive={activeCategory === TRENDING}
        aria-pressed={activeCategory === TRENDING}
      />
    <CategoryButton
      label="Latest"
      onClick={() => onCategorySelect(NEW)}
      isActive={activeCategory === NEW}
      aria-pressed={activeCategory === NEW}
    />

      {/* Search bar */}


      {/* File button */}
      <FidleButton
        label="Upload File"
        onClick={() => onCategorySelect(FILE)}
        isActive={activeCategory === FILE}
        buttonColor={activeCategory === FILE ? '#007bff' : '#000'}
      />

      {/* Dynamic Tag Buttons */}
      {loadingTags ? (
        <span className={styles.loadingTags}>Loading…</span>
      ) : (
        tags.map(tag => (
          <CategoryButton
            key={tag}
            label={tag}
            onClick={() => onCategorySelect(tag)}
            isActive={activeCategory === tag}
            aria-pressed={activeCategory === tag}
          />
        ))
      )}
    </div>
  );
}
