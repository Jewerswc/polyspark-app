// src/components/FeedWithToolbar.jsx
import React, { useState } from 'react';
import CategoryToolbar from './../ui/CategoryToolbar';
import FeedCardsGrid from './FeedCardGrid';
import FileOptions from './FileOptions';
import { TRENDING, FILE } from './../constants/CategoryConstants';

export default function FeedWithToolbar({ onImageClick }) {
  
  const [activeCategory, setActiveCategory] = useState(TRENDING);
  const [showFileOptions, setShowFileOptions] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlug, setCurrentSlug] = useState(null)
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
    onImageClick={onImageClick}
    slug={currentSlug} onBack={() => setCurrentSlug(null)}
  />
    </div>
  );
}
