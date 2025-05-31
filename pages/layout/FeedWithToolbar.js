import React, { useState } from 'react';
import CategoryToolbar from '../../components/CategoryToolbar/CategoryToolbar';
import FeedCardsGrid from './FeedCardGrid';
import FileOptions from './FileOptions';

const FILE     = 'File';

export default function FeedWithToolbar({ onImageClick, activeCategory, onCategorySelect, onSearchChange }) {
  
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlug, setCurrentSlug] = useState(null)

    const showFileOptions = activeCategory === FILE;

    const handleCategorySelect = cat => {
      onCategorySelect(cat);
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