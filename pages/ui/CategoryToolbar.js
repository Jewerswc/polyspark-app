// CategoryToolbar.jsx
import React, { useState } from 'react';
import CategoryButton from './CategoryButton';
import styles from './CategoryToolbar.module.css';

export default function CategoryToolbar({ onCategorySelect }) {
  const categories = ['New', 'Cryptocurrency', 'Python', 'Startups'];
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handleClick = (category) => {
    setActiveCategory(category);
    if (onCategorySelect) onCategorySelect(category);
  };

  return (
    <div className={styles.toolbar}>
      {categories.map((cat) => (
        <CategoryButton
          key={cat}
          label={cat}
          onClick={() => handleClick(cat)}
          isActive={cat === activeCategory}
        />
      ))}
    </div>
  );
}