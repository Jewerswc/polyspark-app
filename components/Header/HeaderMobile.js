import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './HeaderMobile.module.css';
import Logo from './components/Logo/LogoMobile';
import LoginButton from './components/AuthControls/AuthButtons/LoginButton/LoginButton';
import SignUpButton from './components/AuthControls/AuthButtons/SignupButton/SignupButton';
import AvatarMenu from '../Header/AvatarMenuMobile';
import LoginOverlayMobile from './../LoginOverlay/components/LoginOverlayMobile';
import API from '../../lib/api';
import {
  getAccessToken,
  refreshAccessToken,
  clearTokens
} from '../../pages/api/auth';
export default function HeaderMobile({ onReportClick }) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);


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
  const openLogin  = () => setLoginOpen(true);
  const closeLogin = () => setLoginOpen(false);



  return (
    <>
      <header className={styles.siteheader}>
        <div className={styles.container}>
          <Link href="/" className={styles.brand}>
            <Logo />
          </Link>

          <div className={styles.navactions}>
            {isLoggedIn ? (
              <AvatarMenu
                src={avatarUrl || '/default-avatar.png'}
                // Pass the fetched username (or fallback text)
                username={username || 'User'}
                size={32}
                onReportClick={onReportClick}
                onLogout={() => {
                  localStorage.removeItem('accessToken');
                  setLoggedIn(false);
                }}
              />
            ) : (
              <>
                <LoginButton onClick={openLogin} />
                <SignUpButton onClick={openLogin} />
              </>
            )}
          </div>
        </div>
      </header>

      {loginOpen && (
        <LoginOverlayMobile
          onLoginSuccess={() => {
            // overlay should have already populated localStorage
            setLoggedIn(true);
            closeLogin();
          }}
          onClose={closeLogin}
        />
      )}
    </>
  );
}
