import React, { useState } from 'react';
import CategoryToolbar from '../../components/CategoryToolbar/CategoryToolbar';
import FeedCardsGrid from './FeedCardGrid';
import FileOptions from './FileOptions';

const FILE     = 'File';

export default function FeedWithToolbar({
    onImageClick,
    activeCategory,
    onCategorySelect,
    selectedTag,    
    onRemoveTag,     
    searchQuery,      
    onSearchChange

  }) {  
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
        onSearchChange={onSearchChange}   // forward if toolbar uses searchQuery
        onCategorySelect={handleCategorySelect}
        selectedTag={selectedTag}
        onRemoveTag={onRemoveTag}
      />

      {showFileOptions && <FileOptions />}

      <FeedCardsGrid
        activeCategory={activeCategory}
        searchQuery={searchQuery}
        onImageClick={onImageClick}
        slug={currentSlug}
        onBack={() => setCurrentSlug(null)}
        selectedTag={selectedTag}
      />
    </div>
  );
}