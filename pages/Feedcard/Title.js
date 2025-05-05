// FeedCardTitle.jsx
import React from 'react';
import styles from './Title.module.css';

export default function Title({ text, slug }) {
    return (
      <div className={styles.Title}>
        <a
          href={`/articles/${slug}`}
          className={styles.link}
          style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
        >
          {text}
        </a>
      </div>
    );
  }
