import React from 'react';
import styles from './LiveIndicator.module.css';

export default function LiveIndicator() {
  return (
    <div className={styles.liveContainer}>
      <span className={styles.liveText}>LIVE</span>
      {/* The dot that blinks on and off */}
      <span className={styles.blinkingDot} />
    </div>
  );
}
