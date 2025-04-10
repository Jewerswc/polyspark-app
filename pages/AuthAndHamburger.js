import React from 'react';
import AuthButtonsRow from './AuthButtonsRow';
import HamburgerMenu from './HamburgerMenu';
import styles from './AuthAndHamburger.module.css';

export default function AuthAndHamburgerRow() {
  return (
    <div className={styles.container}>
      <AuthButtonsRow />
      <HamburgerMenu onClick={() => console.log("Hamburger clicked")} />
    </div>
  );
}
