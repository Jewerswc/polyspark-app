import React from 'react';
import styles from './SaveChangesButton.module.css';

export default function SaveChangesButton({ onSave, disabled = false }) {
  return (
    <button
      className={styles.chatnowButton}
      onClick={onSave}
      disabled={disabled}
    >
      Save Changes
    </button>
  );
}
