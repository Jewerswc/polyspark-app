import React from 'react';
import styles from './TitleButtonFrame.module.css';
import ActivityTitle from './Title';
import ActivityCategoryButton from './FilterButton';

export default function ActivityTitleButtonFrame({ onFilterSelect }) {
  const handleFilterChange = (sortKey) => {
    if (onFilterSelect) onFilterSelect(sortKey);
  };

  return (
    <div className={styles.container}>
      <ActivityTitle />
      <ActivityCategoryButton onSelect={handleFilterChange} />
    </div>
  );
}