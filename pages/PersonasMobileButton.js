import React from 'react';
import styles from './HomeButton.module.css';

export default function HomeButton({ onClick }) {
  return (
    <button
      className={styles.homeButton}
      onClick={onClick}
      aria-label="Home"
    >
      {/* label first, then icon */}
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1654_5685)">
        <rect x="0.874954" y="0.649902" width="3.5" height="3.5" rx="0.175" fill="currentcolor"/>
        <rect x="6.12498" y="0.649902" width="3.5" height="3.5" rx="0.175" fill="currentcolor"/>
        <rect x="11.3749" y="0.649902" width="3.5" height="3.5" rx="0.175" fill="currentcolor"/>
        <rect x="0.874924" y="5.8999" width="3.5" height="3.5" rx="0.175" fill="currentcolor"/>
        <rect x="6.12498" y="5.8999" width="3.5" height="3.5" rx="0.175" fill="currentcolor"/>
        <rect x="11.3749" y="5.8999" width="3.5" height="3.5" rx="0.175" fill="currentcolor"/>
        <rect x="0.874924" y="11.1499" width="3.5" height="3.5" rx="0.175" fill="currentcolor"/>
        <rect x="6.12498" y="11.1499" width="3.5" height="3.5" rx="0.175" fill="currentcolor"/>
        <rect x="11.3749" y="11.1499" width="3.5" height="3.5" rx="0.175" fill="currentcolor"/>
        </g>
        <defs>
        <clipPath id="clip0_1654_5685">
        <rect x="0.874954" y="0.649902" width="14" height="14" rx="0.35" fill="white"/>
        </clipPath>
        </defs>
        </svg>

      <span className={styles.label}>Personas</span>

    </button>
  );
}
