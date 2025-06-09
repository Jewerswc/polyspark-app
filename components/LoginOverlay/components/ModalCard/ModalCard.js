import React from 'react';
import styles from './ModalCard.module.css';

export default function ModalCard({ onClose, children }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.card} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
 