import React from 'react';
import styles from './ResultSkeleton.module.css';

export default function ActivityResultSkeletonRow() {
  return (
    <div className={styles.skeletonRow}>
      {/* Placeholder for the avatar */}
      <div className={styles.skeletonImage} />

      {/* Placeholder for the main content (title + action text) */}
      <div className={styles.skeletonContent}>
        <div className={styles.skeletonTitle} />
        <div className={styles.skeletonText} />
      </div>

      {/* Placeholder for the “time ago” */}
      <div className={styles.skeletonTime} />
    </div>
  );
}
