// src/components/FeedWithToolbar.jsx
import React, { useState } from 'react';
import CategoryToolbar from '../../components/CategoryToolbar/CategoryToolbar';
import FeedCardsGrid from './FeedCardGrid';
import FileOptions from './FileOptions';
import { TRENDING, FILE } from './../constants/CategoryConstants';

export default function FeedWithToolbar({ onImageClick, activeCategory, onCategorySelect, onSearchChange }) {
  
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlug, setCurrentSlug] = useState(null)

    const showFileOptions = activeCategory === FILE;

    const handleCategorySelect = cat => {
      onCategorySelect(cat);
      // (showFileOptions is derived above)
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
