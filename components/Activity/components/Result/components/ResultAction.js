// FeedCardTitle.jsx
import React from 'react';
import styles from './ResultAction.module.css';

export default function FeedCardTitle({ text, onClick }) {
  return (
    <div 
      className={styles.resultAction} 
      onClick={onClick}
    >
      {text}
    </div>
  );
}
