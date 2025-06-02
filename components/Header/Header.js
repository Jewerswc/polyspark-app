// src/components/Header/Header.jsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import LoginOverlay from './../LoginOverlay/LoginOverlay';
import ChatOverlay from '../ChatOverlay/ChatOverlay';
import styles from './Header.module.css';
import PolysparkLogo from './components/Logo/Logo.module';
import SearchInput from './components/Search/components/SearchInput/SearchInput';
import ButtonRow from './components/PrimaryNav/PrimaryNav';
import AuthAndHamburgerRow from './components/AuthControls/AuthControls';
import TopNavbarBottomRow from './components/CategoryNav/CategoryNav';
import ReportOverlay from '../ReportOverlay/ReportOverlay';
import AvatarMenu from './AvatarMenu';

// IMPORT these helpers and your API instance:
import API from '../../lib/api';
import {
  getAccessToken,
  refreshAccessToken,
  clearTokens
} from '../../pages/api/auth';

export default function Header({
  activeCategory,
  onCategorySelect
}) {
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [isChatOverlayVisible, setChatOverlayVisible] = useState(false);
  const [isReportVisible, setReportVisible] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  // FIXED: add avatarUrl AND username to state
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [username, setUsername] = useState(null);

  const router = useRouter();

  // on mount, check for accessToken
  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      setLoggedIn(true);

      // Attempt to fetch /me/ immediately to get avatar_url + username
      async function fetchProfile() {
        try {
          // Ensure axios (or your API wrapper) has the Authorization header
          if (!API.defaults.headers.common['Authorization']) {
            API.setAuthToken(token);
          }

          const res = await API.get('me/');
          // res.data = { id, username, email, bio, avatar_url, ... }
          setAvatarUrl(res.data.avatar_url);
          setUsername(res.data.username);
        } catch (err) {
          const status = err.response?.status;
          const code = err.response?.data?.code;
          if (status === 401 && code === 'token_not_valid') {
            // try to refresh and retry once
            try {
              const newAccess = await refreshAccessToken();
              API.setAuthToken(newAccess);
              const retryRes = await API.get('me/');
              setAvatarUrl(retryRes.data.avatar_url);
              setUsername(retryRes.data.username);
            } catch {
              // refresh failed → logout
              clearTokens();
              setLoggedIn(false);
              router.push('/login');
            }
          } else {
            console.error('Failed to load profile in Header:', err.response || err);
            clearTokens();
            setLoggedIn(false);
            router.push('/login');
          }
        }
      }

      fetchProfile();
    }
  }, [router]);

  // Overlay toggles
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
            <SearchInput />
          </div>
          <ButtonRow />

          <div className={styles.authWrapper}>
            {/* “Not logged in” controls */}
            <div className={`${styles.authControls} ${isLoggedIn ? styles.hidden : ''}`}>
              <AuthAndHamburgerRow
                onSignupClick={openOverlay}
                onLoginClick={openOverlay}
                onReportClick={openReportOverlay}
              />
            </div>

            {/* “Logged in” avatar menu */}
            <div className={`${styles.loggedIn} ${isLoggedIn ? '' : styles.hidden}`}>
              <AvatarMenu
                // Pass the fetched avatarUrl (or a placeholder if null)
                src={avatarUrl || '/default-avatar.png'}
                // Pass the fetched username (or fallback text)
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
            // Once logged in, re‐fetch the profile to get avatarUrl + username
            (async () => {
              const token = getAccessToken();
              if (token) {
                API.setAuthToken(token);
                try {
                  const res = await API.get('me/');
                  setAvatarUrl(res.data.avatar_url);
                  setUsername(res.data.username);
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
