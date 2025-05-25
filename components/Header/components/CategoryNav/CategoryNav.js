import React from 'react';
import LiveIndicator from './components/LiveIndicator/LiveIndicator';
import TopicsRow from './components/TopicRow/TopicRow';
import styles from './CategoryNav.module.css';

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
