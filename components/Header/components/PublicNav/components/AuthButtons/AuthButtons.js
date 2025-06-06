import React from 'react';
import LoginButton from './LoginButton/LoginButton';
import SignupButton from './SignupButton/SignupButton';
import styles from './AuthButtons.module.css';

export default function AuthButtonsRow({ onLoginClick, onSignupClick }) {
  return (
    <div className={styles.authRow}>
      <LoginButton onClick={onLoginClick} />
      <SignupButton onClick={onSignupClick} />
    </div>
  );
}
