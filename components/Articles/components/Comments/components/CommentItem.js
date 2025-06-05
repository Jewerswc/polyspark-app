// components/Articles/components/Comments/CommentItem.jsx
import React, { useState } from 'react';
import styles from './CommentItem.module.css';
import Linkify from 'react-linkify';

import CommentInputAndAvatar from './InputAndAvatar';
import SubmitButton from './SubmitButton/SubmitButton';

export default function CommentItem({
  comment,
  onReplyClick,
  onLikeClick,
  currentUserUsername,

  // Inline‐reply props:
  parentCommentId,
  newContent,
  setNewContent,
  handleSubmit,
  submitting,
  avatarUrl,
  handleCancelReply,

  // NEW: forceShowReplies controls whether this comment's replies
  // should render unconditionally (no toggle) or not.
  forceShowReplies = false,
}) {
  const {
    id,
    content,
    created_at,
    likes,
    author_username,
    author_profile_picture,
    liked_by_user,
    replies,
  } = comment;

  const [isSubmittingLike, setIsSubmittingLike] = useState(false);

  // Local toggle for this comment (only used when forceShowReplies === false)
  const [areRepliesVisible, setAreRepliesVisible] = useState(false);

  // Format date like “4 Jun 2025, 14:22” in en‐GB:
  const formattedDate = new Date(created_at).toLocaleString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  // Like/unlike handler
  const handleLike = async () => {
    if (isSubmittingLike) return;
    setIsSubmittingLike(true);
    try {
      await onLikeClick(id, liked_by_user);
    } catch (err) {
      console.error('Error in handleLike:', err);
    } finally {
      setIsSubmittingLike(false);
    }
  };

  // Are we currently replying under this exact comment?
  const isReplyingHere = parentCommentId === id;

  // Disable “Post Reply” if content is empty or only “@username”
  const mentionPrefix = `@${author_username}`;
  const replyTrimmed = newContent.trim();
  const isReplyEmpty =
    replyTrimmed === '' || replyTrimmed === mentionPrefix;
  const isReplyDisabled = submitting || isReplyEmpty;

  const hasReplies = replies && replies.length > 0;
  // If forceShowReplies === true, we always render nested replies
  // Otherwise, render them only when areRepliesVisible === true
  const shouldShowReplies = forceShowReplies || areRepliesVisible;

  return (
    <div className={styles.commentItem}>
      {/* — HEADER: avatar + username + date — */}
      <div className={styles.header}>
        <img
          src={author_profile_picture || '/default-avatar.png'}
          alt={`${author_username}'s avatar`}
          className={styles.avatar}
        />
        <div className={styles.meta}>
          <span className={styles.username}>{author_username}</span>
          <span className={styles.date}>{formattedDate}</span>
        </div>
      </div>

      {/* — CONTENT (auto‐link URLs) — */}
      <div className={styles.content}>
        <Linkify>{content}</Linkify>
      </div>

      {/* — FOOTER: [Reply] and [Like (N)] — */}
      <div className={styles.footer}>
        <button
          className={styles.replyButton}
          onClick={() => onReplyClick(id, author_username)}
        >
          Reply
        </button>
        <button
          className={styles.likeButton}
          onClick={handleLike}
          disabled={isSubmittingLike}
        >
          {liked_by_user ? 'Unlike' : 'Like'} ({likes})
        </button>
      </div>

      {/* — INLINE REPLY BOX WRAPPER — 
           Collapsed unless isReplyingHere is true. */}
      <div
        className={`${styles.replyBoxContainer} ${
          isReplyingHere ? styles.open : ''
        }`}
      >
        <div className={styles.replyBox}>
          <CommentInputAndAvatar
            avatarUrl={avatarUrl}
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            placeholder="Write a reply…"
          />
          <div className={styles.replyActions}>
            <SubmitButton
              onClick={handleSubmit}
              disabled={isReplyDisabled}
            />
            <button
              className={styles.cancelButton}
              onClick={handleCancelReply}
              disabled={submitting}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* 
        — REPLIES (either show toggle or entire subtree) — 
        Only if this comment has children 
      */}
      {hasReplies && (
        <div className={styles.repliesWrapper}>
          {/** CASE A: forceShowReplies === false → show one toggle button */}
          {!forceShowReplies && !areRepliesVisible && (
            <button
              className={styles.toggleRepliesButton}
              onClick={() => setAreRepliesVisible(true)}
            >
              Show {replies.length}{' '}
              {replies.length === 1 ? 'Reply' : 'Replies'}
            </button>
          )}

          {/** CASE B: forceShowReplies === false but areRepliesVisible === true → show “Hide” + subtree */}
          {!forceShowReplies && areRepliesVisible && (
            <>
              <button
                className={styles.toggleRepliesButton}
                onClick={() => setAreRepliesVisible(false)}
              >
                Hide {replies.length === 1 ? 'Reply' : 'Replies'}
              </button>
              <div className={styles.replies}>
                {replies.map((child) => (
                  <CommentItem
                    key={child.id}
                    comment={child}
                    onReplyClick={onReplyClick}
                    onLikeClick={onLikeClick}
                    currentUserUsername={currentUserUsername}
                    parentCommentId={parentCommentId}
                    newContent={newContent}
                    setNewContent={setNewContent}
                    handleSubmit={handleSubmit}
                    submitting={submitting}
                    avatarUrl={avatarUrl}
                    handleCancelReply={handleCancelReply}
                    forceShowReplies={true} 
                    // ← pass down so grandchildren render unconditionally
                  />
                ))}
              </div>
            </>
          )}

          {/**
            CASE C: forceShowReplies === true on this comment
            → immediately render all replies (no buttons at this level)
          */}
          {forceShowReplies && (
            <div className={styles.replies}>
              {replies.map((child) => (
                <CommentItem
                  key={child.id}
                  comment={child}
                  onReplyClick={onReplyClick}
                  onLikeClick={onLikeClick}
                  currentUserUsername={currentUserUsername}
                  parentCommentId={parentCommentId}
                  newContent={newContent}
                  setNewContent={setNewContent}
                  handleSubmit={handleSubmit}
                  submitting={submitting}
                  avatarUrl={avatarUrl}
                  handleCancelReply={handleCancelReply}
                  forceShowReplies={true} 
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
