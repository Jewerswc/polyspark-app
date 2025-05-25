import React from 'react';
import styles from './Input.module.css';

export default function Input({
  placeholder, value, onChange, ...props
}) {
  return (
    <textarea
      required
      className={styles.textInput}
      placeholder="Write a comment..."
      value={value}
      onChange={onChange}
      autoCapitalize="none"
      autoCorrect="off"
      {...props}
    />
  );
}
