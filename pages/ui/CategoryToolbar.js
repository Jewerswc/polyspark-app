import React from 'react';
import CategoryLabelMobile from './Top';
import SearchBar from './SearchRecent';
import CategoryButton from './CategoryButton';
import FidleButton from './../fidlebutton';
import styles from './CategoryToolbar.module.css';
import { TRENDING, FILE, CATEGORIES } from './../constants/CategoryConstants';

export default function CategoryToolbar({
  activeCategory,
  searchQuery,
  onCategorySelect,
  onSearchChange
}) {
  return (
    <div className={styles.toolbar}>
      {/* Trending */}
      <CategoryLabelMobile
        onClick={() => onCategorySelect(TRENDING)}
        isActive={activeCategory === TRENDING}
        aria-pressed={activeCategory === TRENDING}
      />

      {/* Search bar */}
      <SearchBar
        placeholder="Search Recent"
        iconSrc="MGlass.svg"
        value={searchQuery}
        onChange={e => onSearchChange(e.target.value)}
      />

      {/* File button */}
      <FidleButton
        label="Upload File"
        onClick={() => onCategorySelect(FILE)}
        isActive={activeCategory === FILE}
        buttonColor={activeCategory === FILE ? '#007bff' : '#000'}
      />

      {/* Categories */}
      {CATEGORIES.map(cat => (
        <CategoryButton
          key={cat}
          label={cat}
          onClick={() => onCategorySelect(cat)}
          isActive={activeCategory === cat}
          aria-pressed={activeCategory === cat}
        />
      ))}
    </div>
  );
}
