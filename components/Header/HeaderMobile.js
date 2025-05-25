import React from 'react';
import Logo from './components/Logo/LogoMobile';
import LoginButton from './components/AuthControls/AuthButtons/LoginButton/LoginButton';
import SignUpButton from './components/AuthControls/AuthButtons/SignupButton/SignupButton';
import styles from './HeaderMobile.module.css';
import Link from 'next/link'


export default function HeaderMobile({ onLoginClick, onSignupClick }) {
  return (
    <header className={styles.siteheader}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          <Logo />
        </Link>
        <div className={styles.navactions}>
          <LoginButton onClick={onLoginClick} />
          <SignUpButton onClick={onSignupClick} />
        </div>
      </div>
    </header>
  );
}
