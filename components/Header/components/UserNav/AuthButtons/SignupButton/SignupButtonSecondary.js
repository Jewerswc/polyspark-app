import React from 'react';
import styles from './SignupButtonSecondary.module.css';

export default function SignUpButton({ onClick }) {
  return (
    <button className={styles.signUpButton} onClick={onClick}>
      Sign up
    </button>
  );
}