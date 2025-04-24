import React from 'react';
import LoginButton from './LoginButton';
import SignUpButton from './SignupButton';
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
