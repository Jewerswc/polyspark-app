import React from 'react';
import styles from './SignupButton.module.css';

export default function SignUpButton({ label, onClick }) {
  return (
    <div
      className={styles.signupButton} 
      onClick={onClick}
    >
      Sign up
    </div>
  );
}
