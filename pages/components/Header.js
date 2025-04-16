import React from 'react';
import styles from './Header.module.css';
import PolysparkLogo from './PolysparkLogo';
import SearchInput from './SearchInput';
import ButtonRow from './ButtonRow';         
import AuthAndHamburgerRow from '../Header/AuthAndHamburger';
import TopNavbarBottomRow from './TopNavbarBottomRow'

export default function Header() {

  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <PolysparkLogo />
        <SearchInput />
        <ButtonRow />
        <AuthAndHamburgerRow />
      </div>

      <div className={styles.bottomRow}>
      <TopNavbarBottomRow />
      </div>
    </header>
  );
}