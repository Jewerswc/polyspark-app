import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import LoginOverlay from './../LoginOverlay/LoginOverlay';
import ChatOverlay from '../ChatOverlay/ChatOverlay';
import styles from './Header.module.css';
import PolysparkLogo from './components/Logo/Logo.module';
import SearchInput from './components/Search/components/SearchInput/SearchInput';
import ButtonRow from './components/PrimaryNav/PrimaryNav';
import UserNav from './components/UserNav/UserNav';
import PublicNav from './components/PublicNav/PublicNav';
import TopNavbarBottomRow from './components/CategoryNav/CategoryNav';
import ReportOverlay from '../ReportOverlay/ReportOverlay';

import API from '../../lib/api';
import {
  getAccessToken,
  refreshAccessToken,
  clearTokens
} from '../../pages/api/auth';

export default function Header({
  activeCategory,
  onCategorySelect, 
  onTagClick,
}) {
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [isChatOverlayVisible, setChatOverlayVisible] = useState(false);
  const [isReportVisible, setReportVisible] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const [avatarUrl, setAvatarUrl] = useState(null);
  const [username, setUsername] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const cached = window.localStorage.getItem('cachedAvatarUrl');
    if (cached) {
      setAvatarUrl(cached);
    }

    const token = getAccessToken();
    if (token) {
      setLoggedIn(true);

      async function fetchProfile() {
        try {
          if (!API.defaults.headers.common['Authorization']) {
            API.setAuthToken(token);
          }

          const res = await API.get('auth/me/');
          // res.data = { id, username, email, bio, avatar_url, ... }
          setAvatarUrl(res.data.avatar_url);
          setUsername(res.data.username);

          // ☆ Write the “fresh” avatar URL back into localStorage:
          window.localStorage.setItem('cachedAvatarUrl', res.data.avatar_url);
        } catch (err) {
          const status = err.response?.status;
          const code = err.response?.data?.code;
          if (status === 401 && code === 'token_not_valid') {
            // try to refresh and retry once
            try {
              const newAccess = await refreshAccessToken();
              API.setAuthToken(newAccess);
              const retryRes = await API.get('auth/me/');
              setAvatarUrl(retryRes.data.avatar_url);
              setUsername(retryRes.data.username);
              window.localStorage.setItem(
                'cachedAvatarUrl',
                retryRes.data.avatar_url
              );
            } catch {
              // refresh failed → logout
              clearTokens();
              setLoggedIn(false);
              // optional: clear the cached avatar on logout
              window.localStorage.removeItem('cachedAvatarUrl');
              router.push('/');
            }
          } else {
            console.error('Failed to load profile in Header:', err.response || err);
            clearTokens();
            setLoggedIn(false);
            window.localStorage.removeItem('cachedAvatarUrl');
            router.push('/');
          }
        }
      }

      fetchProfile();
    }
  }, [router]);

  // Overlay toggles (unchanged)
  const openOverlay = () => setOverlayVisible(true);
  const closeOverlay = () => setOverlayVisible(false);
  const openChatOverlay = () => setChatOverlayVisible(true);
  const closeChatOverlay = () => setChatOverlayVisible(false);
  const openReportOverlay = () => setReportVisible(true);
  const closeReportOverlay = () => setReportVisible(false);

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.topRow}>
          <PolysparkLogo />
          <div className={styles.flexGrow}>
            <SearchInput 
              onTagClick={onTagClick} 
                        />
          </div>
          <ButtonRow />

          <div className={styles.authWrapper}>
            <div className={`${styles.authControls} ${isLoggedIn ? styles.hidden : ''}`}>
              <PublicNav
                onSignupClick={openOverlay}
                onLoginClick={openOverlay}
                onReportClick={openReportOverlay}
              />
            </div>

            {/* “Logged in” avatar menu */}
            <div className={`${styles.loggedIn} ${isLoggedIn ? '' : styles.hidden}`}>
              <UserNav
                // If avatarUrl is null (first ever load), it falls back to default.
                src={avatarUrl || '/default-avatar.png'}
                username={username || 'User'}
                alt="User Avatar"
                size={32}
                onReportClick={openReportOverlay}
              />
            </div>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <TopNavbarBottomRow
            activeCategory={activeCategory}
            onCategorySelect={onCategorySelect}
          />
        </div>
      </header>

      {isOverlayVisible && (
        <LoginOverlay
          onGoogleContinue={() => console.log('Google Continue')}
          onEmailContinue={(email) => console.log('Email submitted:', email)}
          onClose={closeOverlay}
          onLoginSuccess={() => {
            setOverlayVisible(false);
            setLoggedIn(true);
            // Once logged in, re‐fetch the profile to get avatarUrl + username:
            (async () => {
              const token = getAccessToken();
              if (token) {
                API.setAuthToken(token);
                try {
                  const res = await API.get('me/');
                  setAvatarUrl(res.data.avatar_url);
                  setUsername(res.data.username);
                  window.localStorage.setItem('cachedAvatarUrl', res.data.avatar_url);
                } catch {
                  /* ignore */
                }
              }
            })();
          }}
        />
      )}

      {isReportVisible && (
        <ReportOverlay onClose={closeReportOverlay} />
      )}

      {isChatOverlayVisible && (
        <ChatOverlay onClose={closeChatOverlay} />
      )}
    </div>
  );
}
