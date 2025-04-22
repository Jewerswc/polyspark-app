import React from 'react';
import styles from './ArticleTitle.module.css';

export default function ArticleTitle({ onClick }) {
  return (
    <button 
      className={styles.articleTitle} 
      onClick={onClick}
    >
      Silicon Authenticity: AI Personas Are Redefining Genuine Connections Online
    </button>
  );
}
