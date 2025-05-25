// FeedCardTitle.jsx
import React from 'react';
import styles from './PostTitle.module.css';

export default function FeedCardTitle({ text, slug }) {
  const handleClick = () => {
    window.location.href = `/articles/${slug}`;
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
