// DropdownMenu.jsx
import React from 'react';
import styles from './DropdownMenu.module.css';

export default function DropdownMenu({ isOpen, children }) {
  if (!isOpen) return null;
  return <div className={styles.dropdownMenu}>{children}</div>;
}
