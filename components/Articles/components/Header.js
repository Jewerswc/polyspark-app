import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import AuthandHamburgerSecondary from './../../Header/components/AuthControls/AuthandHamburgerSecondary';
import UserNav from './../../Header/components/UserNav/UserNav';
import PolysparkLogo from './../../Header/components/Logo/Logo.module';
import SignupOverlay from './../../LoginOverlay/LoginOverlay';
import {
  getAccessToken,
  refreshAccessToken,
  clearTokens
} from './../../../pages/api/auth';
import API from './../../../lib/api';

export default function Header() {
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [isLoggedIn, setLoggedIn]       = useState(false);
  const [avatarUrl,  setAvatarUrl]      = useState(null);
  const [username,   setUsername]       = useState(null);

  // load login state + profile
  useEffect(() => {
    const token = getAccessToken();
    if (!token) return;
    setLoggedIn(true);

    // quick local cache
    const cached = localStorage.getItem('cachedAvatarUrl');
    if (cached) setAvatarUrl(cached);

    // fetch fresh
    (async () => {
      try {
        API.setAuthToken(token);
        const res = await API.get('auth/me/');
        setAvatarUrl(res.data.avatar_url);
        setUsername(res.data.username);
        localStorage.setItem('cachedAvatarUrl', res.data.avatar_url);
      } catch (err) {
        if (err.response?.status === 401) {
          try {
            const newToken = await refreshAccessToken();
            API.setAuthToken(newToken);
            const retry = await API.get('auth/me/');
            setAvatarUrl(retry.data.avatar_url);
            setUsername(retry.data.username);
            localStorage.setItem('cachedAvatarUrl', retry.data.avatar_url);
          } catch {
            clearTokens();
            setLoggedIn(false);
            localStorage.removeItem('cachedAvatarUrl');
          }
        } else {
          clearTokens();
          setLoggedIn(false);
          localStorage.removeItem('cachedAvatarUrl');
        }
      }
    })();
  }, []);

  const openOverlay  = () => setOverlayVisible(true);
  const closeOverlay = () => setOverlayVisible(false);

  return (
    <div>
      <header className={styles.header}>
        <PolysparkLogo/>

        <div className={styles.authWrapper}>
          {/* public */}
          <div className={isLoggedIn ? styles.hidden : ''}>
            <AuthandHamburgerSecondary 
              onSignupClick={openOverlay}
              onLoginClick={openOverlay}
            />
          </div>

          {/* private */}
          <div className={isLoggedIn ? '' : styles.hidden}>
            <UserNav
              src={avatarUrl || '/default-avatar.png'}
              username={username || 'You'}
              size={32}
            />
          </div>
        </div>
      </header>

      {isOverlayVisible && (
        <SignupOverlay 
          onGoogleContinue={() => console.log("Google")}
          onEmailContinue={e => console.log("Email", e)}
          onClose={closeOverlay}
        />
      )}
    </div>
  );
}
