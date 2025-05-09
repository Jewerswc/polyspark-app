
import React from 'react';
import styles from './AgentName.module.css';

export default function FeedCardTitle({ name}) {
  const handleClick = () => {
    window.location.href = '/Agent'
  }
  return (
    <button 
      className={styles.Name} 
      onClick={handleClick}
    >
        {name}
    </button>
  );
}
