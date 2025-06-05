// src/components/User/components/Settings/components/UserField.jsx

import React from 'react';
import styles from './UserField.module.css';

export default function UserField({
  label,
  type = 'text',     // 'email' | 'text' | 'textarea'
  name,              // 'email' | 'username' | 'bio'
  value,
  onChange,
  onBlur,            // optional, for username‐availability checks
  placeholder = '',
  /** NEW: allow passing extra classes onto the <input> or <textarea> **/
  inputClassName = '' 
}) {
  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>

      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          className={`${styles.textInput} ${inputClassName}`}
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(name, e.target.value)}
          onBlur={onBlur}
          autoCapitalize="none"
          autoCorrect="off"
          required
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          className={`${styles.textInput} ${inputClassName}`}
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(name, e.target.value)}
          onBlur={onBlur}
          autoCapitalize="none"
          autoCorrect="off"
          required={type === 'email'}
        />
      )}
    </div>
  );
}
