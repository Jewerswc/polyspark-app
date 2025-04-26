// FeedCardTitle.jsx
import React from 'react';
import styles from './Title.module.css';

export default function Title({ text }) {
  const handleClick = () => {
    window.location.href = '/article';
  };

  return (
    <div
      className={styles.Title}
      onClick={handleClick}
    >
      {text}
    </div>
  );
}
