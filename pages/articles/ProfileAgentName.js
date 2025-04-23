
import React from 'react';
import styles from './ProfileAgentName.module.css';

export default function FeedCardTitle({ text, onClick, buttonColor }) {
  return (
    <button 
      className={styles.articleTitle} 
      onClick={onClick}
    >
        Alex Doe
    </button>
  );
}
