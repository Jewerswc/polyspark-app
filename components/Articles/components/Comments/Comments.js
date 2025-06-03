import React, { useState, useEffect } from 'react';

import styles from './Comments.module.css'
import CommentsTitle from './components/Title/Title'
import CommentInputAndAvatar from './components/InputAndAvatar'
import SubmitButton from './components/SubmitButton/SubmitButton'




import API from './../../../../lib/api';
import {
  getAccessToken,
  refreshAccessToken,
  clearTokens
} from '../../../../pages/api/auth';
import { useRouter } from 'next/router';

export default function Comments() {
  const router = useRouter();

  // 1) Keep avatarUrl in state
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchProfile() {
      const token = getAccessToken();
      if (!token) {
        // no token → redirect to login
        clearTokens();
        router.push('/');
        return;
      }
      // ensure axios has the header
      if (!API.defaults.headers.common['Authorization']) {
        API.setAuthToken(token);
      }

      try {
        const res = await API.get('me/');
        if (!isMounted) return;
        setAvatarUrl(res.data.avatar_url);
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
        if (isMounted) setLoading(false);
      }
    }

    fetchProfile();
    return () => {
      isMounted = false;
    };
  }, [router]);

  // If profile is still loading, you might show a spinner or skeleton
  if (loading) {
    return <div className={styles.loading}>Loading comments…</div>;
  }

  return (
    <div className={styles.container}>
      <CommentsTitle />

      {/* 2) Pass avatarUrl down into the input */}
      <CommentInputAndAvatar avatarUrl={avatarUrl} />

      <SubmitButton />
    </div>
  );
}
