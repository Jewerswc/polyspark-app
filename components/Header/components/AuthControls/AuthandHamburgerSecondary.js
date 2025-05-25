// AuthButtonsContainer.js
import React from 'react';
import AuthButtonsSecondary from './AuthButtons/AuthButtonsSecondary'
import styles from './AuthandHamburgerSecondary.module.css';
import HamburgerMenu from './Hamburger/HamburgerMenu';

export default function AuthButtonsContainer({ onLoginClick, onSignupClick}) {
  return (
    <div className={styles.buttonContainer}>
        <AuthButtonsSecondary 
                onLoginClick={onLoginClick}
                onSignupClick={onSignupClick}
              />
        <HamburgerMenu />
    </div>
  );
}
