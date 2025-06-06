// AuthButtonsContainer.js
import React from 'react';
import SignUpButton from './SignupButton/SignupButtonSecondary';
import LoginButton from './LoginButton/LoginButtonSecondary';
import styles from './AuthButtonsSecondary.module.css';

export default function AuthButtonsContainer({ onSignupClick, onLoginClick }) {
  return (
    <div className={styles.buttonContainer}>
      <LoginButton onClick={onLoginClick} />
      <SignUpButton onClick={onSignupClick} />
    </div>
  );
}
