import React from 'react';
import AuthButtonsRow from './AuthButtonsRow';
import HamburgerMenu from './HamburgerMenu';
import styles from './AuthAndHamburger.module.css';

export default function AuthAndHamburgerRow({ onLoginClick, onSignupClick }) {
  return (
    <div className={styles.container}>
      <AuthButtonsRow 
        onLoginClick={onLoginClick} 
        onSignupClick={onSignupClick}
      />
      <HamburgerMenu onClick={() => console.log("Hamburger clicked")} />
    </div>
  );
}
