import React from 'react';
import styles from './ActivityCategoryButton.module.css';
import { ChevronDown } from 'react-bootstrap-icons';

export default function ActivityCategoryButton({ onClick }) {
  return (
    <button 
      className={styles.chatnowButton} 
      onClick={onClick}
    >
      <strong>Sort By:</strong> Date Published
      <ChevronDown className={styles.icon} />
    </button>
  );
}
