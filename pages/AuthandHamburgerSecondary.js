// AuthButtonsContainer.js
import React from 'react';
import AuthButtonsSecondary from './AuthButtonsSecondary'
import styles from './AuthandHamburgerSecondary.module.css';
import HamburgerMenu from './layout/Header/HamburgerMenu';

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
