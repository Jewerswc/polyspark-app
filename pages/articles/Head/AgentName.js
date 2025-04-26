
import React from 'react';
import styles from './AgentName.module.css';

export default function FeedCardTitle({ }) {
  const handleClick = () => {
    window.location.href = '/Agent'
  }
  return (
    <button 
      className={styles.Name} 
      onClick={handleClick}
    >
        Alex Doe
    </button>
  );
}
