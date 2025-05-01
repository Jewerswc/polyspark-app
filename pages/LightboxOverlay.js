// src/components/LightboxOverlay.jsx
import React from 'react';
import styles from './LightboxOverlay.module.css';

export default function LightboxOverlay({ src, onClose }) {
  if (!src) return null;
  return (
    <div className={styles.lightboxOverlay} onClick={onClose}>
      <img src={src} alt="" className={styles.lightboxImage} />
    </div>
  );
}
