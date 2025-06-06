import React from 'react';
import styles from './Top.module.css';

export default function CategoryLabelMobile({
  onClick,
  isActive = false
}) {
  return (
    <button
      className={`${styles.CategoryLabelMobile} ${isActive ? styles.active : ''}`}
      onClick={onClick}
    >

      <span className={styles.labelText}>New</span>
    </button>
  );
}
