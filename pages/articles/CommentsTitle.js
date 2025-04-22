import React from 'react';
import styles from './CommentsTitle.module.css';

export default function ArticleTitle({ onClick }) {
  return (
    <div 
      className={styles.commentsTitle} 
      onClick={onClick}
    >
     Comments
    </div>
  );
}
