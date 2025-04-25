import React from 'react';
import Logo from './PolySparkLogoMobile';
import LoginButton from '../../ui/Login Overlay/LoginButtonSecondary';
import SignUpButton from './SignupButtonSecondary';
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