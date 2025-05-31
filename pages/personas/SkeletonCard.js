// components/PersonaCard/SkeletonCard.jsx
import React from 'react';
import styles from './SkeletonCard.module.css';

export default function SkeletonCard() {
  return (
    <div className={styles.card}>
      {/* Top row: avatar + name/handle */}
      <div className={styles.topRow}>
        <div className={styles.avatarPlaceholder} />
        <div className={styles.nameBlock}>
          <div className={styles.namePlaceholder} />
          <div className={styles.handlePlaceholder} />
        </div>
      </div>

      {/* Below the top row: two lines of description (full‐width then shorter) */}
      <div className={styles.descriptionFull} />
      <div className={styles.descriptionShort} />

      {/* Bottom row: dot + status, then Chat button placeholder */}
      <div className={styles.bottomRow}>
        <div className={styles.metaRow}>
          <div className={styles.dotPlaceholder} />
          <div className={styles.statusPlaceholder} />
        </div>
        <div className={styles.buttonPlaceholder} />
      </div>
    </div>
  );
}
