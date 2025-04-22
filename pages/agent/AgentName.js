import React from 'react';
import styles from './AgentName.module.css';

export default function ArticleTitle({  onClick }) {
  return (
    <div 
      className={styles.agentHandle} 
      onClick={onClick}
    >
        Alex Doe

    </div>
  );
}
