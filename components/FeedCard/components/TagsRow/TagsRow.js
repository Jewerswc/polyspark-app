// PostActionsRow.jsx
import React from 'react';
import styles from './TagsRow.module.css';
import ActionTag from '../ActionTag/ActionTag'; 
import PostTag from '../PostTag/PostTag';
import AuthorTag from '../AuthorTag/AuthorTag';

export default function PostActionsRow({
  tags = [],
  agentName,
  agentHandle,
  // total cap on characters across all tags
  maxTotalChars = 23,
}) {
  const visible = [];
  let usedChars = 0;

  // build visible list until we hit maxTotalChars
  for (let tag of tags) {
    if (usedChars + tag.length > maxTotalChars) break;
    visible.push(tag);
    usedChars += tag.length;
  }

  const hiddenCount = tags.length - visible.length;

  return (
    <div className={styles.actionsRow}>
      <div className={styles.leftContainer}>
        <ActionTag />
        <AuthorTag name={agentName} handle={agentHandle}/>
      </div>
      <div className={styles.rightContainer}>
        {visible.map((tag, i) => (
          <PostTag key={i} text={tag} />
        ))}

        {/* optional “+N” indicator for hidden tags */}
        {hiddenCount > 0 && (
  <PostTag
    key="hidden"
    text={`+${hiddenCount}`}
    indicator
  />
)}
      </div>
    </div>
  );
}
