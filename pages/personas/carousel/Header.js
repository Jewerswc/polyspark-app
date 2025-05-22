import React from 'react';
import styles from './Header.module.css';

export default function ChatNowButton({ label, onClick }) {
  return (
    <div className={styles.chatnowButton} onClick={onClick}>
      {label}
      <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 1L6.37663 5.70833C6.45571 5.78622 6.5 5.89094 6.5 6C6.5 6.10906 6.45571 6.21378 6.37663 6.29167L1.5 11" stroke="currentcolor" stroke-width="1.75"/>
</svg>
    </div>
  );
}
