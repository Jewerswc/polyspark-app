import React from 'react';
import styles from './LoginButton.module.css';

export default function LoginButton({ onClick }) {
  return (
    <button className={styles.loginButton} onClick={onClick}>
      Log in
    </button>
  );
}