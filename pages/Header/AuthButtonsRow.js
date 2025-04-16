import React from 'react';
import LoginButton from './LoginButton';
import SignupButton from './SignupButton';
import styles from './AuthButtonsRow.module.css';

export default function AuthButtonsRow({ onLoginClick, onSignupClick }) {
  return (
    <div className={styles.authRow}>
      <LoginButton onClick={onLoginClick} />
      <SignupButton onClick={onSignupClick} />
    </div>
  );
}
