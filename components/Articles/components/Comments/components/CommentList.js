// components/Articles/components/Comments/CommentList.jsx
import React, { useState, useMemo } from 'react';
import CommentItem from './CommentItem';
import styles from './CommentsList.module.css'; // new CSS module (see below)

export default function CommentList({
  comments,
  onReplyClick,
  onLikeClick,
  currentUserUsername,
  onEditComment,
  onDeleteComment,

  // inline‐reply props:
  parentCommentId,
  newContent,
  setNewContent,
  handleSubmit,
  submitting,
  avatarUrl,
  handleCancelReply,
}) {
  const [showAll, setShowAll] = useState(false);

  // 1) Sort comments by likes descending (memoized so we don't re-sort on every render)
  const sortedComments = useMemo(() => {
    return [...comments].sort((a, b) => b.likes - a.likes);
  }, [comments]);

  // 2) Determine which comments to display:
  const visibleComments = showAll
    ? sortedComments
    : sortedComments.slice(0, 2);

  // 3) How many are hidden?
  const hiddenCount = sortedComments.length - visibleComments.length;

  // 4) If no comments at all, show a placeholder:
  if (!comments || comments.length === 0) {
    return (
      <div style={{ padding: '1rem 0', textAlign: 'center', color: '#666' }}>
       
      </div>
    );
  }

  return (
    <div>
      {visibleComments.map((c) => (
        <CommentItem
          key={c.id}
          comment={c}
          onReplyClick={onReplyClick}
          onLikeClick={onLikeClick}
          currentUserUsername={currentUserUsername}
          onEditComment={onEditComment}
          onDeleteComment={onDeleteComment}
          parentCommentId={parentCommentId}
          newContent={newContent}
          setNewContent={setNewContent}
          handleSubmit={handleSubmit}
          submitting={submitting}
          avatarUrl={avatarUrl}
          handleCancelReply={handleCancelReply}
        />
      ))}

      {/* 5) If there are hidden comments, show “X more comments…” */}
      {hiddenCount > 0 && !showAll && (
        <button
          className={styles.showMoreButton}
          onClick={() => setShowAll(true)}
        >
          {hiddenCount} more {hiddenCount === 1 ? 'comment' : 'comments'}…
        </button>
      )}
    </div>
  );
}
