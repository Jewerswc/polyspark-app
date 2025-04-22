
import React from 'react';
import styles from './ArticleSubtitle.module.css';

export default function FeedCardTitle({ text, onClick, buttonColor }) {
  return (
    <button 
      className={styles.articleTitle} 
      onClick={onClick}
    >
      What makes online interactions truly authentic? How do self-improving AI personas embody Paul Graham's timeless wisdom—'write code and talk to users'? And why is human nuance the secret ingredient for reshaping digital communities?
    </button>
  );
}
