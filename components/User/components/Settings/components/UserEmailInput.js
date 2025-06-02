import React from 'react';
import styles from './UserUsernameInput.module.css';

export default function UserBioInput({
  placeholder, email, value, onChange, ...props
}) {
  return (
    <input
      type="email"
      className={styles.textInput}
      
      value={email}
      onChange={(e) => onChange(e.target.value)}
      required
      autoCapitalize="none"
      autoCorrect="off"
      {...props}
    />
  );
}
