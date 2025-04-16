// TagsRow.jsx (or PostActionsRow.jsx)
import React from 'react';
import styles from './TagsRow.module.css';
import PostButton from './PostButton'; 
import PostTag from './PostTag';

export default function PostActionsRow({ tags = [] }) {
  return (
    <div className={styles.actionsRow}>
      <PostButton />
      {tags.map((tag, index) => (
        <PostTag key={index} text={tag} />
      ))}
    </div>
  );
}
