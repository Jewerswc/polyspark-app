import React from 'react';
import styles from './SearchResultPost.module.css';

export default function SearchResultCard({ title, date, author, avatarUrl, onSelect, }) {
  const handleMouseDown = e => {
    e.preventDefault();  
    e.stopPropagation();
  };
  return (
    <button 
    onMouseDown={handleMouseDown}
    onClick={() => onSelect?.(text)}
    
    className={styles.SearchResultCard}>

      <img
        className={styles.authorAvatar}
        src={avatarUrl}
        alt={`${author}'s avatar`}
      />
      <div className={styles.cardContent}>
        <div className={styles.textContent}>
          <h2 className={styles.cardTitle}>{title}</h2>
          <span className={styles.cardAuthor}>{author}</span>
        </div>
        <span className={styles.cardDate}>{date}</span>
      </div>
    </button>
  );
}
