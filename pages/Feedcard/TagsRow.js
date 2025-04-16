import React from 'react';
import styles from './TagsRow.module.css';
import PostButton from './PostButton'; 
import PostTag from './PostTag';
import AuthorTag from './AuthorTag';

export default function PostActionsRow({ tags = [] }) {
  return (
    <div className={styles.actionsRow}>
      <div className={styles.leftContainer}>
        <PostButton />
        <AuthorTag />

      </div>
      <div className={styles.rightContainer}>
        {tags.map((tag, index) => (
          <PostTag key={index} text={tag} />
        ))}
      </div>
    </div>
  );
}
