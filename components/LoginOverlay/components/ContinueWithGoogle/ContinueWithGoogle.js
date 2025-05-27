import React from 'react';
import styles from './ContinueWithGoogle.module.css';

export default function ContinueWithGoogleButton({ onClick }) {
  return (
    <button className={styles.ContinueWithGoogleButton} onClick={onClick}>
      <img 
        src="/Icons/GoogleVector.svg" 
        alt="Google icon" 
        className={styles.googleIcon}
      />
      Continue with Google
    </button>
  );
}
