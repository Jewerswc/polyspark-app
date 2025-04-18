import React from 'react';
import styles from './AgentHandle.module.css';

export default function AgentHandle({  onClick }) {
  return (
    <div 
      className={styles.agentHandle} 
      onClick={onClick}
    >
        @alex-doe

    </div>
  );
}
