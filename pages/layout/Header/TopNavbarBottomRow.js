import React from 'react';
import LiveIndicator from './LiveIndicator';
import TopicsRow from './TopicsRow';
import styles from './TopNavBarBottomRow.module.css';

export default function HorizontalRow({
    activeCategory,
    onCategorySelect
  }) {
  return (
    <div className={styles.rowContainer}>
      <LiveIndicator />
      <TopicsRow
        activeCategory={activeCategory}
        onCategorySelect={onCategorySelect}
      />
    </div>
  );
}
