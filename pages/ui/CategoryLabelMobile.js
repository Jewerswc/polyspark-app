import React from 'react';
import styles from './CategoryLabelMobile.module.css';

export default function CategoryLabelMobile({
  label,
  onClick,
  isActive = false
}) {
   return (
      <button
        className={
            `${styles.CategoryLabelMobile} ` +
            (isActive ? styles.active : '')
        }
        onClick={onClick}
        >
        {label}
        </button>
    );
    }
