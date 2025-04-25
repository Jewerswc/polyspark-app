import React from 'react';
import styles from './LoginButton.module.css';

export default function LoginButton({ label, onClick }) {
  return (
    <div
      className={styles.loginButton} 
      onClick={onClick}
    >
      Log in
    </div>
  );
}
