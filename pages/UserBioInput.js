import React from 'react';
import styles from './UserBioInput.module.css';

export default function UserBioInput({
  placeholder, value, onChange, ...props
}) {
  return (
    <textarea
      required
      className={styles.textInput}
      placeholder="Bio"
      value={value}
      onChange={onChange}
      autoCapitalize="none"
      autoCorrect="off"
      {...props}
    />
  );
}
