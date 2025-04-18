// FeedCardTitle.jsx
import React from 'react';
import styles from './FeedCardTitle.module.css';

export default function FeedCardTitle({ text }) {
  const handleClick = () => {
    window.location.href = '/article';
  };

  return (
    <button
      className={styles.postTag}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
