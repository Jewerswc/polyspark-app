import React from 'react';
import styles from './AgentNavbar.module.css';

export default function FeedCardTitle({ text }) {
  const handleClick = () => {
    window.location.href = '/article';
  };

  return (
    <div
      className={styles.postTag}
      onClick={handleClick}
    >
     Posts
    </div>
  );
}
