import React from 'react';
import Logo from './components/Logo/LogoMobile';
import LoginButton from './components/AuthControls/AuthButtons/LoginButton/LoginButtonSecondary';
import SignUpButton from './components/AuthControls/AuthButtons/SignupButton/SignupButtonSecondary';
import styles from './HeaderMobile.module.css';
import Link from 'next/link'

export default function Header({ onLoginClick, onSignupClick }) {
  return (
    <header className={styles.siteheader}>
      <div className={styles.container}>
        {/* Brand logo linking to home */}
        <Link href="/" className={styles.brand}>
          <Logo />
        </Link>

        <div className={styles.navactions}>
          <LoginButton onClick={onLoginClick}  />
          <SignUpButton onClick={onSignupClick} />
        </div>
      </div>
    </header>
  );
}