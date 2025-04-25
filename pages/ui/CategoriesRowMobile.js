import React from 'react';
import CategoryLabelMobile from './Category Row Mobile/CategoryLabelMobile';
import Top from './Category Row Mobile/Top'
import styles from './CategoriesRowMobile.module.css';

// Define your categories here
const defaultCategories = ['New', 'Trending', 'Tech', 'Startups', 'Coding', 'Economy', 'Trump', 'Ukraine'];

export default function CategoriesRow({

  labels = defaultCategories,
  activeLabel,
  onLabelClick // (label) => …
}) {
  return (
    <div className={styles.row}>
      <Top />
      {labels.map(label => (
        <CategoryLabelMobile
          key={label}
          label={label}
          isActive={label === activeLabel}
          onClick={() => onLabelClick(label)}
        />
      ))}
    </div>
  );
}
