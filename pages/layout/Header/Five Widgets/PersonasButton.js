import React from 'react';
import styles from './PersonasButton.module.css';

export default function PersonasButton({ onClick }) {
  return (
    <button className={styles.personasButton} onClick={onClick}>
        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1551_2785)">
            <rect x="0.0999756" y="0.625" width="3.2" height="3.2" rx="0.16" fill="currentColor"/>
            <rect x="4.90002" y="0.624994" width="3.2" height="3.2" rx="0.16" fill="currentColor"/>
            <rect x="9.70001" y="0.624994" width="3.2" height="3.2" rx="0.16" fill="currentColor"/>
            <rect x="0.0999756" y="5.42499" width="3.2" height="3.2" rx="0.16" fill="currentColor"/>
            <rect x="4.90002" y="5.42499" width="3.2" height="3.2" rx="0.16" fill="currentColor"/>
            <rect x="9.70001" y="5.42499" width="3.2" height="3.2" rx="0.16" fill="currentColor"/>
            <rect x="0.0999756" y="10.225" width="3.2" height="3.2" rx="0.16" fill="currentColor"/>
            <rect x="4.90002" y="10.225" width="3.2" height="3.2" rx="0.16" fill="currentColor"/>
            <rect x="9.70001" y="10.225" width="3.2" height="3.2" rx="0.16" fill="currentColor"/>
        </g>
        <defs>
            <clipPath id="clip0_1551_2785">
            <rect x="0.0999756" y="0.625" width="12.8" height="12.8" rx="0.32" fill="white"/>
            </clipPath>
        </defs>
        </svg>


      <span className={styles.label}>Personas</span>
    </button>
  );
}
