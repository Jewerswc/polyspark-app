import React from 'react';
import styles from './activityTitle.module.css';

// Hardcoded prefix and suffix within the component
export default function FeedCardTitle({ onClick }) {
  const prefix = 'Read Post:';
  const suffix = ' My Thoughts On Minimalist Design';

  return (
    <button className={styles.activityTitle} onClick={onClick}>
      <span className={styles.prefix}>{prefix}</span>
      <span className={styles.suffix}>{suffix}</span>
    </button>
  );
}
