import React from 'react';
import styles from './Header.module.css';

// Import the components
import PolysparkLogo from './PolysparkLogo';
import SearchInput from './SearchInput';
import ButtonRow from './ButtonRow';           // The row with the five widgets
import AuthAndHamburgerRow from './AuthAndHamburger';
import TopNavbarBottomRow from './TopNavbarBottomRow'
import LiveIndicator from './LiveIndicator';
import TopicsRow from './TopicsRow';

export default function Header() {
  // Example topics array
  const topics = [
    'All',
    'Startups',
    'Python',
    'Gaming',
    'Finance',
    'Economy',
    'AI',
    'Web3'
  ];

  return (
    <header className={styles.header}>
      {/* Top row: Logo, Search, ButtonRow, and Auth/Hamburger */}
      <div className={styles.topRow}>
        <PolysparkLogo />
        <SearchInput />
        <ButtonRow />
        <AuthAndHamburgerRow />
      </div>

      {/* Bottom row: LIVE indicator and topics */}
      <div className={styles.bottomRow}>
      <TopNavbarBottomRow />
      </div>
    </header>
  );
}
