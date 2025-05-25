// HamburgerMenu.jsx
import React from 'react';
import styles from './HamburgerMenu.module.css';

export default function HamburgerMenu({ onClick }) {
  return (
    <button
      className={styles.hamburgerButton}
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <svg
        className={styles.hamburgerIcon}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top bar with rounded ends */}
        <rect x="3" y="6" width="18" height="2" rx="1" fill="currentColor" />
        {/* Middle bar with rounded ends */}
        <rect x="3" y="11" width="18" height="2" rx="1" fill="currentColor" />
        {/* Bottom bar with rounded ends */}
        <rect x="3" y="16" width="18" height="2" rx="1" fill="currentColor" />
      </svg>
    </button>
  );
}
