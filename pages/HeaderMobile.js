import React from 'react';
import Logo from './PolySparkLogoMobile';
import LoginButton from './layout/Header/LoginButton';
import SignUpButton from './layout/Header/SignupButton';
import styles from './HeaderMobile.module.css';

export default function Header() {
  return (
    <header className={styles.siteheader}>
      <div className={styles.container}>
        {/* Brand logo linking to home */}
        <a href="/" className={styles.brand}>
          <Logo />
        </a>

        {/* Navigation actions */}
        <div className={styles.navactions}>
          <LoginButton onClick={() => (window.location.href = '/login')} />
          <SignUpButton onClick={() => (window.location.href = '/signup')} />
        </div>
      </div>
    </header>
  );
}
