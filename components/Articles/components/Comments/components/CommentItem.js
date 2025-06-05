import React, { useState, useRef, useEffect } from 'react';
import styles from './CommentItem.module.css';
import Linkify from 'react-linkify';

import CommentInputAndAvatar from './InputAndAvatar';
import SubmitButton from './SubmitButton/SubmitButton';

export default function CommentItem({
  comment,
  onReplyClick,
  onLikeClick,
  currentUserUsername,
  onEditComment,    // ← new
  onDeleteComment,  // ← new

  // Inline‐reply props:
  parentCommentId,
  newContent,
  setNewContent,
  handleSubmit,
  submitting,
  avatarUrl,
  handleCancelReply,

  // forceShowReplies controls one-toggle behavior
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
    replies = [],
  } = comment;

  const [isSubmittingLike, setIsSubmittingLike] = useState(false);
  const [areRepliesVisible, setAreRepliesVisible] = useState(false);

  // NEW: for the “⋯” menu dropdown
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    }
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Format date like “4 Jun 2025, 14:22” (en-GB)
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

  // Inline reply logic
  const isReplyingHere = parentCommentId === id;
  const mentionPrefix = `@${author_username}`;
  const replyTrimmed = newContent.trim();
  const isReplyEmpty = replyTrimmed === '' || replyTrimmed === mentionPrefix;
  const isReplyDisabled = submitting || isReplyEmpty;

  // Show/hide replies
  const hasReplies = replies.length > 0;
  const shouldShowReplies = forceShowReplies || areRepliesVisible;

  // Are we the author?
  const isAuthor = currentUserUsername === author_username;

  return (
    <div className={styles.commentItem}>
      {/* — HEADER: avatar + username + date on left; “⋯” on right (if author) — */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
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

        {isAuthor && (
          <div className={styles.menuContainer} ref={menuRef}>
            <button
              className={styles.menuButton}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              ⋯
            </button>
            {isMenuOpen && (
              <div className={styles.menuDropdown}>
                <div
                  className={styles.menuItem}
                  onClick={() => {
                    setIsMenuOpen(false);
                    onEditComment(id);
                  }}
                >
                  Edit
                </div>
                <div
                  className={styles.menuItem}
                  onClick={() => {
                    setIsMenuOpen(false);
                    onDeleteComment(id);
                  }}
                >
                  Delete
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* — CONTENT (auto‐link URLs) — */}
      <div className={styles.content}>
        <Linkify>{content}</Linkify>
      </div>

      {/* — FOOTER: [Reply] + [Like (N)] — */}
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

      {/* — INLINE REPLY BOX (collapsed until open) — */}
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
            <button
              className={styles.cancelButton}
              onClick={handleCancelReply}
              disabled={submitting}
            >
              Cancel
            </button>
            <SubmitButton
              onClick={handleSubmit}
              disabled={isReplyDisabled}
            />
          </div>
        </div>
      </div>

      {/* — SHOW/HIDE REPLIES TO THIS COMMENT — */}
      {hasReplies && (
        <div className={styles.repliesWrapper}>
          {!forceShowReplies && !areRepliesVisible && (
            <button
              className={styles.toggleRepliesButton}
              onClick={() => setAreRepliesVisible(true)}
            >
              Show {replies.length}{' '}
              {replies.length === 1 ? 'Reply' : 'Replies'}
            </button>
          )}

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
                    onEditComment={onEditComment}
                    onDeleteComment={onDeleteComment}
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
            </>
          )}

          {forceShowReplies && (
            <div className={styles.replies}>
              {replies.map((child) => (
                <CommentItem
                  key={child.id}
                  comment={child}
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
