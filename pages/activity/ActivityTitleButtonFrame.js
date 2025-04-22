import React from 'react';
import styles from './ActivityTitleButtonFrame.module.css';
import ActivityTitle from './Title';
import ActivityCategoryButton from './FilterButton';

export default function ActivityTitleButtonFrame({ onFilterSelect }) {
  const handleFilterChange = (sortKey) => {
    // rename to filter
    if (onFilterSelect) onFilterSelect(sortKey);
  };

  return (
    <div className={styles.container}>
      <ActivityTitle />
      {/* wire dropdown to parent filter setter */}
      <ActivityCategoryButton onSelect={handleFilterChange} />
    </div>
  );
}