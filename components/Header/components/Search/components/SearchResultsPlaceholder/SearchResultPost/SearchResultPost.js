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
  url,        // <–– new prop
}) {
  return (
    <div className={styles.SearchResultCard}>
      {thumbnailUrl && (
        <img
          className={styles.authorAvatar}
          src={thumbnailUrl}
          alt={`Thumbnail for ${title}`}
        />
      )}

      <div className={styles.cardContent}>
        <div className={styles.textContent}>
          {/* Option A: plain <a> tag (full page reload) */}
          <a href={`/articles/${url}`} className={styles.cardTitleLink}>
            <h2 className={styles.cardTitle}>{title}</h2>
          </a>

          {/* Option B: react-router <Link> (client-side navigation) */}
          {/*
          <Link to={url} className={styles.cardTitleLink}>
            <h2 className={styles.cardTitle}>{title}</h2>
          </Link>
          */}

          <span className={styles.cardAuthor}>{author}</span>
        </div>
        <span className={styles.cardDate}>{date}</span>
      </div>
    </div>
  );
}
