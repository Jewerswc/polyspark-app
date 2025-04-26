import React from 'react';
import styles from './TagsRow.module.css';
import ActionTag from './tags/ActionTag'; 
import PostTag from './tags/PostTag';
import AuthorTag from './tags/AuthorTag';

export default function PostActionsRow({ tags = [] }) {
  return (
    <div className={styles.actionsRow}>
      <div className={styles.leftContainer}>
        <ActionTag />
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
