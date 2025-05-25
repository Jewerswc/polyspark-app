import React from 'react';
import styles from './SignupButton.module.css';

export default function SignUpButton({ onClick }) {
  return (
    <button className={styles.signUpButton} onClick={onClick}>
      Sign up
    </button>
  );
}