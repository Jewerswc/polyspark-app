// CategoriesRowMobile.jsx
import React from 'react'
import Top from './Category Row Mobile/Top'
import CategoryLabelMobile from './Category Row Mobile/CategoryLabelMobile'
import styles from './CategoriesRowMobile.module.css'

export const defaultCategories = [
  'New',
  'Python',
  'ML/AI',
  'Security',
  'Startups',
  'Blockchain',
  'Politics',
  'Rocketry'
];

export default function CategoriesRowMobile({
  labels = defaultCategories,
  activeLabel,
  onLabelClick
}) {
  return (
    <div className={styles.row}>
      {/* Top tab: */}
      <Top
        isActive={activeLabel === 'Top'}
        onClick={() => onLabelClick('Top')}
      />

      {/* All the other labels: */}
      {labels.map(label => (
        <CategoryLabelMobile
          key={label}
          label={label}
          isActive={label === activeLabel}
          onClick={() => onLabelClick(label)}
        />
      ))}
    </div>
  )
}
