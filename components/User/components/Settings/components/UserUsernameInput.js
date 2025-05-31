import React from 'react';
import styles from './UserUsernameInput.module.css';

export default function UserBioInput({
  placeholder, value, onChange, ...props
}) {
  return (
    <input
      type="text"
      className={styles.textInput}
      placeholder="Jewerswc"
      value={value}
      onChange={onChange}
      autoCapitalize="none"
      autoCorrect="off"
      {...props}
    />
  );
}
