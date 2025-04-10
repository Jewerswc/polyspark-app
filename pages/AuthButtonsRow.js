import React from 'react';
import LoginButton from './LoginButton';
import SignupButton from './SignupButton';
import styles from './AuthButtonsRow.module.css';

export default function AuthButtonsRow() {
  return (
    <div className={styles.authRow}>
      <LoginButton onClick={() => console.log("Login clicked")} />
      <SignupButton onClick={() => console.log("Signup clicked")} />
    </div>
  );
}
