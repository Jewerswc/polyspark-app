import React from 'react';
import styles from './TopicButton.module.css';

export default function TopicButton({ label, onClick }) {
  return (
    <button className={styles.allButton} onClick={onClick}>
      {label}
    </button>
  );
}
