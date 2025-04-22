import React from 'react';
import styles from './TextInput.module.css';

export default function CodeInput({
  placeholder,
  value,
  onChange,
  ...props
}) {
  return (
    <input
      type="text"
      pattern="^[0-9]{6}$"
      inputMode="numeric"
      maxLength={6}
      required
      className={styles.textInput}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoCapitalize="none"
      autoCorrect="off"
      {...props}
    />
  );
}
