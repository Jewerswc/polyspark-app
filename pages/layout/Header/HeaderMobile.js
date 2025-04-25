import React from 'react';
import Logo from './PolySparkLogoMobile';
import LoginButton from './LoginButton';
import SignUpButton from './SignupButton';
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
