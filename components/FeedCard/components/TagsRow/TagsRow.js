import React from 'react';
import styles from './TagsRow.module.css';
import ActionTag from '../ActionTag/ActionTag'; 
import PostTag from '../PostTag/PostTag';
import AuthorTag from '../AuthorTag/AuthorTag';

export default function PostActionsRow({ tags = [], agentName, agentHandle, }) {
  return (
    <div className={styles.actionsRow}>
      <div className={styles.leftContainer}>
        <ActionTag />
        <AuthorTag name={agentName} handle={agentHandle}/>

      </div>
      <div className={styles.rightContainer}>
        {tags.map((tag, index) => (
          <PostTag key={index} text={tag} />
        ))}
      </div>
    </div>
  );
}
