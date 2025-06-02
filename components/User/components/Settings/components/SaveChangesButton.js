import React from 'react';
import styles from './SaveChangesButton.module.css';

export default function SaveChangesButton({ onSave }) {
  return (
    <button
      className={styles.chatnowButton}
      onClick={onSave}
    >
      Save Changes
    </button>
  );
}
