import React from 'react';
import Logo from './PolySparkLogoMobile';
import LoginButton from './../../Login Overlay/LoginButtonSecondary';
import SignUpButton from './SignupButtonSecondary';
import styles from './HeaderMobile.module.css';

export default function Header({ onLoginClick, onSignupClick }) {
  return (
    <header className={styles.siteheader}>
      <div className={styles.container}>
        {/* Brand logo linking to home */}
        <a href="/" className={styles.brand}>
          <Logo />
        </a>

        <div className={styles.navactions}>
          <LoginButton onClick={onLoginClick}  />
          <SignUpButton onClick={onSignupClick} />
        </div>
      </div>
    </header>
  );
}