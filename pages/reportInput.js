import React from 'react';
import styles from './ReportInput.module.css';

export default function TextInput({ placeholder, value, onChange, ...props }) {
       return (
    <textarea
      type="text"
      pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
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
