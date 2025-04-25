// NavigationButton.jsx
import React from 'react';
import styles from './NavigationButton.module.css';

export default function ChatNowButton({ label, href }) {
  return (
    <a href={href} className={styles.chatnowButton}>
      {label}
    </a>
  );
}
