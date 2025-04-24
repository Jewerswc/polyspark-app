import React from 'react';
import styles from './CommentsInput.module.css';

export default function TextInput({
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
