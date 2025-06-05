// components/Articles/components/Comments/Comments.jsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './Comments.module.css';

import CommentsTitle from './components/Title/Title';
import CommentInputAndAvatar from './components/InputAndAvatar';
import SubmitButton from './components/SubmitButton/SubmitButton';
import CommentList from './components/CommentList';

import API from '../../../../lib/api';
import {
  getAccessToken,
  refreshAccessToken,
  clearTokens
} from '../../../../pages/api/auth';

export default function Comments() {
  const router = useRouter();
  const { slug } = router.query; // e.g. "my-article-slug"

  // 1) Profile (avatar + username)
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [currentUsername, setCurrentUsername] = useState(null);
  const [loadingProfile, setLoadingProfile] = useState(true);

  // 2) The entire comment tree (with nested replies)
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(true);
  const [errorComments, setErrorComments] = useState(null);

  // 3) One shared “new comment” box: content + parentId
  const [newContent, setNewContent] = useState('');
  const [parentCommentId, setParentCommentId] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // — Fetch the user’s avatar & username from /me/ —
  useEffect(() => {
    let isMounted = true;

    async function fetchProfile() {
      const token = getAccessToken();
      if (!token) {
        clearTokens();
        router.push('/');
        return;
      }
      if (!API.defaults.headers.common['Authorization']) {
        API.setAuthToken(token);
      }
      try {
        const res = await API.get('me/');
        if (!isMounted) return;
        setAvatarUrl(res.data.avatar_url);
        setCurrentUsername(res.data.username);
      } catch (err) {
        const status = err.response?.status;
        const code = err.response?.data?.code;
        if (status === 401 && code === 'token_not_valid') {
          try {
            const newAccess = await refreshAccessToken();
            API.setAuthToken(newAccess);
            const retry = await API.get('me/');
            if (!isMounted) return;
            setAvatarUrl(retry.data.avatar_url);
            setCurrentUsername(retry.data.username);
          } catch {
            clearTokens();
            router.push('/');
            return;
          }
        } else {
          console.error('Failed to load profile in Comments:', err.response || err);
          clearTokens();
          router.push('/');
          return;
        }
      } finally {
        if (isMounted) setLoadingProfile(false);
      }
    }

    fetchProfile();
    return () => {
      isMounted = false;
    };
  }, [router]);

  // — Fetch the full comment tree for this article —
  useEffect(() => {
    if (!slug) return;
    let isMounted = true;

    async function fetchComments() {
      setLoadingComments(true);
      setErrorComments(null);
      try {
        const res = await API.get(`articles/${slug}/comments/`);
        if (!isMounted) return;
        setComments(res.data);
      } catch (err) {
        console.error('Error fetching comments:', err);
        if (isMounted) setErrorComments('Failed to load comments.');
      } finally {
        if (isMounted) setLoadingComments(false);
      }
    }

    fetchComments();
    return () => {
      isMounted = false;
    };
  }, [slug]);

  // — “Reply” button clicked under comment #id — 
  function handleReplyClick(commentId, username) {
    setParentCommentId(commentId);
    setNewContent(`@${username} `);
  }

  // — Like/unlike a comment #id, then re-fetch entire tree —
  async function handleLikeClick(commentId, currentlyLiked) {
    if (!slug) return;
    try {
      if (!currentlyLiked) {
        await API.post(`comments/${commentId}/like/`);
      } else {
        await API.delete(`comments/${commentId}/like/`);
      }
      const r2 = await API.get(`articles/${slug}/comments/`);
      setComments(r2.data);
    } catch (err) {
      console.error('Error liking/unliking comment:', err);
    }
  }

  // — “Post” click for either top‐level or a reply —
  async function handleSubmit() {
    if (!newContent.trim() || !slug) return;

    setSubmitting(true);
    setErrorComments(null);

    try {
      const payload = { content: newContent.trim() };
      if (parentCommentId) {
        payload.parent = parentCommentId;
      }

      // **IMPORTANT**: verify in DevTools → Network that this payload does include `"parent": parentCommentId`
      console.log("Posting comment payload:", payload);

      await API.post(`articles/${slug}/comments/`, payload);

      // Re-fetch so the new reply shows up under its parent
      const r2 = await API.get(`articles/${slug}/comments/`);
      setComments(r2.data);

      // Clear the input and snap the box back to “top‐level comment” mode
      setNewContent('');
      setParentCommentId(null);
    } catch (err) {
      console.error('Error submitting comment:', err);
      setErrorComments("Could not post comment. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (loadingProfile) {
    return <div className={styles.loading}>Loading comments…</div>;
  }

  return (
    <div className={styles.container}>
      <CommentsTitle />

      {/* Show any load/submit error */}
      {errorComments && !loadingComments && (
        <div className={styles.error} style={{ marginBottom: '1rem' }}>
          {errorComments}
        </div>
      )}

      {/* 1) If NOT replying to any existing comment, show the top‐level box here */}
      {parentCommentId === null && (
        <div className={styles.inputWrapper}>
          <CommentInputAndAvatar
            avatarUrl={avatarUrl}
            value={newContent}
            onChange={e => setNewContent(e.target.value)}
            placeholder="Write a comment…"
          />
          <SubmitButton
            onClick={handleSubmit}
            disabled={!newContent.trim() || submitting}
          />
        </div>
      )}

      {/* 2) Show the comment tree (or a loading indicator) */}
      {loadingComments ? (
        <div className={styles.loading}></div>
      ) : (
        <CommentList
          comments={comments}
          onReplyClick={handleReplyClick}
          onLikeClick={handleLikeClick}
          currentUserUsername={currentUsername}

          // Pass down for inline reply boxes:
          parentCommentId={parentCommentId}
          newContent={newContent}
          setNewContent={setNewContent}
          handleSubmit={handleSubmit}
          submitting={submitting}
          avatarUrl={avatarUrl}
        />
      )}
    </div>
  );
}
