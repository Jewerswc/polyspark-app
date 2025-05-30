import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './HeaderMobile.module.css';
import Logo from './components/Logo/LogoMobile';
import LoginButton from './components/AuthControls/AuthButtons/LoginButton/LoginButton';
import SignUpButton from './components/AuthControls/AuthButtons/SignupButton/SignupButton';
import AvatarMenu from '../Header/AvatarMenuMobile';
import LoginOverlayMobile from './../LoginOverlay/components/LoginOverlayMobile';

export default function HeaderMobile({ onReportClick }) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setLoggedIn(!!token);
  }, []);

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
                src={localStorage.getItem('avatarUrl')}
                username={localStorage.getItem('username')}
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
