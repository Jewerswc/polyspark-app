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
      <svg
        className={styles.icon}
        width="14"
        height="11"
        viewBox="0 0 14 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M5.13636 5.5L5.55512 5.03603L5.07073 4.59883L4.65479 5.10161L5.13636 5.5ZM7.90625 8L7.48749 8.46397L7.97619 8.90505L8.39132 8.39412L7.90625 8ZM14 0.5L7.25824 3.07526L12.8594 7.62617L14 0.5ZM1.48157 10.8984L5.61793 5.89839L4.65479 5.10161L0.518429 10.1016L1.48157 10.8984ZM4.7176 5.96397L7.48749 8.46397L8.32501 7.53603L5.55512 5.03603L4.7176 5.96397ZM8.39132 8.39412L10.938 5.25976L9.96784 4.47152L7.42118 7.60588L8.39132 8.39412Z"
          fill="currentcolor"
        />
      </svg>
      <span className={styles.labelText}>Top</span>
    </button>
  );
}
