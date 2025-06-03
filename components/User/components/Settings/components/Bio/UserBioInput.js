import React from 'react';
import styles from './UserBioInput.module.css';

export default function UserBioInput({
  placeholder, value, bio, onChange, ...props
}) {
  return (
    <textarea
      required
      className={styles.textInput}
      placeholder="Bio"
      value={bio}
      onChange={(e) => onChange(e.target.value)}
      autoCapitalize="none"
      autoCorrect="off"
      {...props}
    />
  );
}
