import React from 'react';
import LoginButton from './components/LoginButton/LoginButton';
import SignUpButton from './components/SignupButton/SignupButton';
import styles from './ButtonFrame.module.css';

export default function AuthButtonFrame({
  loginLabel = 'Log in',
  signupLabel = 'Sign up',
  onLogin = () => {},
  onSignup = () => {}
}) {
  return (
    <div className={styles.frame}>
      <LoginButton label={loginLabel} onClick={onLogin} />
      <SignUpButton label={signupLabel} onClick={onSignup} />
    </div>
  );
}
