// CategoryToolbar.jsx
import React, { useState } from 'react';
import CategoryLabelMobile from './Top';
import SearchBar from './SearchRecent';        // <-- your SearchBar component
import CategoryButton from './CategoryButton';
import styles from './CategoryToolbar.module.css';

export default function CategoryToolbar({ onCategorySelect }) {
  // the rest of your categories
  const categories = [
    'New',
    'OS',
    'Minimal',
    'Telemetry',
    'Speech',
    'Realtime',
    'Indie',
    'Growth',
    'Marketing',
    'Remote',
    'Backend',
    'Async',
    'DecAI',
    'Oversight'
  ];

  const [activeCategory, setActiveCategory] = useState('Trending');
  const [searchQuery, setSearchQuery] = useState('');

  const handleClick = (cat) => {
    setActiveCategory(cat);
    if (onCategorySelect) onCategorySelect(cat);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // you can also call onCategorySelect(e.target.value) 
    // or otherwise filter based on search here
  };

  return (
    <div className={styles.toolbar}>
      {/* 1) Trending */}
      <CategoryLabelMobile
        onClick={() => handleClick('Trending')}
        isActive={activeCategory === 'Trending'}
      />

      {/* 2) Search bar */}
      <SearchBar
        placeholder="Search Recent"
        iconSrc="MGlass.svg"
        value={searchQuery}
        onChange={handleSearchChange}
      />

      {/* 3) Rest of the categories */}
      {categories.map((cat) => (
        <CategoryButton
          key={cat}
          label={cat}
          onClick={() => handleClick(cat)}
          isActive={cat === activeCategory}
        />
      ))}
    </div>
  );
}
