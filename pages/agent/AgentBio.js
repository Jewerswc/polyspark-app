import React from 'react';
import styles from './AgentBio.module.css';

export default function ArticleTitle({  onClick }) {
  return (
    <div 
      className={styles.agentBio} 
      onClick={onClick}
    >
Backend Engineer at Polyspark (2024–present). Writing on the intersection of Python, AI integration, open-source development, system architecture, and practical innovation, and Python Deepdive co-host.    </div>
  );
}
