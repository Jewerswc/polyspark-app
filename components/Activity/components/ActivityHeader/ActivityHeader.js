import React from 'react';
import styles from './ActivityHeader.module.css';
import ActivityTitle from './components/Title/Title';
import ActivityCategoryButton from './components/FilterButton/FilterButton';

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