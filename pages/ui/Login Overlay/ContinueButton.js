import React from 'react';
import styles from './ContinueButton.module.css';

export default function ContinueButton({ onClick }) {
  return (
    <button className={styles.continueButton} onClick={onClick}>
      Continue
    </button>
  );
}
