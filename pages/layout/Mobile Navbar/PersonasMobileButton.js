import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './HomeButton.module.css';

export default function HomeButton({ onClick }) {
    const { pathname } = useRouter();
    const isActive = pathname === '/';
  return (
    <Link
      href="/persona"
      aria-label="Activity"
      className={`${styles.homeButton} ${
        isActive ? styles.active : ''
      }`}
    >
      <div className={styles.svgWrapper}>
        <svg
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.icon}
          aria-hidden="true"
        >
          <g clipPath="url(#clip0_1654_5685)">
            <rect x="0.875" y="0.65" width="3.5" height="3.5" rx="0.175" fill="currentColor"/>
            <rect x="6.125" y="0.65" width="3.5" height="3.5" rx="0.175" fill="currentColor"/>
            <rect x="11.375" y="0.65" width="3.5" height="3.5" rx="0.175" fill="currentColor"/>
            <rect x="0.875" y="5.9" width="3.5" height="3.5" rx="0.175" fill="currentColor"/>
            <rect x="6.125" y="5.9" width="3.5" height="3.5" rx="0.175" fill="currentColor"/>
            <rect x="11.375" y="5.9" width="3.5" height="3.5" rx="0.175" fill="currentColor"/>
            <rect x="0.875" y="11.15" width="3.5" height="3.5" rx="0.175" fill="currentColor"/>
            <rect x="6.125" y="11.15" width="3.5" height="3.5" rx="0.175" fill="currentColor"/>
            <rect x="11.375" y="11.15" width="3.5" height="3.5" rx="0.175" fill="currentColor"/>
          </g>
          <defs>
            <clipPath id="clip0_1654_5685">
              <rect x="0.875" y="0.65" width="14" height="14" rx="0.35" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>
      <span className={styles.label}>Personas</span>
    </Link>
  );
}
