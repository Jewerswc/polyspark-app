// SearchResultPost.js

import React from 'react';
import styles from './SearchResultPost.module.css';
// If you’re using react-router in your SPA:
// import { Link } from 'react-router-dom';

export default function SearchResultCard({
  title,
  date,
  author,
  thumbnailUrl,
  url,
  author_handle
}) {
  return (
    <div className={styles.SearchResultCard}>
      {thumbnailUrl && (
                  <a href={`/articles/${url}`} className={styles.cardTitleLink}>

        <img
          className={styles.authorAvatar}
          src={thumbnailUrl}
          alt={`Thumbnail for ${title}`}
        />
        </a>
      )}

      <div className={styles.cardContent}>
        <div className={styles.textContent}>
          {/* Option A: plain <a> tag (full page reload) */}
          <a href={`/articles/${url}`} className={styles.cardTitleLink}>
            <h2 className={styles.cardTitle}>{title}</h2>
          </a>
          <a href={`/profile/${author_handle}`} className={styles.cardTitleLink}>
          <span className={styles.cardAuthor}>{author}</span>
          </a>
        </div>
        <span className={styles.cardDate}>{date}</span>
      </div>
    </div>
  );
}
