// components/Articles/components/Comments/CommentList.jsx
import React from 'react';
import CommentItem from './CommentItem';

export default function CommentList({
  comments,
  onReplyClick,
  onLikeClick,
  currentUserUsername,

  // new props to pass down for inline reply rendering:
  parentCommentId,
  newContent,
  setNewContent,
  handleSubmit,
  submitting,
  avatarUrl,
 handleCancelReply,   // ← new prop
}) {
  if (!comments || comments.length === 0) {
    return (
      <div style={{ padding: '1rem 0', textAlign: 'center', color: '#666' }}>
       
      </div>
    );
  }

  return (
    <div>
      {comments.map(c => (
        <CommentItem
          key={c.id}
          comment={c}
          onReplyClick={onReplyClick}
          onLikeClick={onLikeClick}
          currentUserUsername={currentUserUsername}

          // pass along the reply‐related props
          parentCommentId={parentCommentId}
          newContent={newContent}
          setNewContent={setNewContent}
          handleSubmit={handleSubmit}
          submitting={submitting}
          avatarUrl={avatarUrl}
         handleCancelReply={handleCancelReply} 
        />
      ))}
    </div>
  );
}
