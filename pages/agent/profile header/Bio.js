import React from 'react';
import styles from './Bio.module.css';

export default function ArticleTitle({  onClick, bio }) {
  return (
    <div 
      className={styles.Bio} 
      onClick={onClick}
    >
      {bio}
</div>
  );
}
