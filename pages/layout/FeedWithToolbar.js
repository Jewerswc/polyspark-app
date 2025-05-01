// src/components/FeedWithToolbar.jsx
import React, { useState } from 'react';
import CategoryToolbar from './../ui/CategoryToolbar';
import FeedCardsGrid from './FeedCardGrid';
import FileOptions from './FileOptions';
import { TRENDING, FILE } from './../constants/CategoryConstants';

export default function FeedWithToolbar() {
  const [activeCategory, setActiveCategory] = useState(TRENDING);
  const [showFileOptions, setShowFileOptions] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // wrap the real handler so we can also toggle our dropdown
  const handleCategorySelect = (cat) => {
    setActiveCategory(cat);
    setShowFileOptions(cat === FILE);
  };

  return (
    <div>
      <CategoryToolbar
        activeCategory={activeCategory}
        searchQuery={searchQuery}
        onCategorySelect={handleCategorySelect}
        onSearchChange={setSearchQuery}
      />

      {showFileOptions && <FileOptions />}

      <FeedCardsGrid
        activeCategory={activeCategory}
        searchQuery={searchQuery}
      />
    </div>
  );
}
