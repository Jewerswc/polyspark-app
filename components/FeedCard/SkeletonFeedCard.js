import React from 'react';
import styles from './SkeletonFeedCard.module.css';

export default function SkeletonFeedCard() {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        {/* Title */}
        <div className={styles.title} />

        {/* Description lines */}
        <div className={styles.description} />
        <div className={styles.descriptionShort} />

        {/* Meta row: post type / author / tags */}
        <div className={styles.metaRow}>
          <div className={styles.metaItemWide} />
          <div className={styles.metaItem} />
          <div className={styles.metaItem} />
        </div>
      </div>

      {/* Thumbnail image */}
      <div className={styles.thumbnail} />
    </div>
  );
}
