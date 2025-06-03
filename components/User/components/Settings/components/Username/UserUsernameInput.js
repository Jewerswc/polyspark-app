import React from 'react';
import styles from './UserUsernameInput.module.css';

export default function UserBioInput({
  placeholder, value, onChange, onFieldChange, username, ...props
}) {
  return (
    <input
      type="text"
      className={styles.textInput}
      placeholder="Jewerswc"
      value={username}
      onChange={(e) => onChange(e.target.value)}
      autoCapitalize="none"
      autoCorrect="off"
      {...props}
    />
  );
}
