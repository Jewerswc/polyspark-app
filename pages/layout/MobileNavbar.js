import React from 'react';

import styles from './MobileNavbar.module.css';
import HomeButton from './Mobile Navbar/HomeButton';
import PersonasMobileButton from './Mobile Navbar/PersonasMobileButton';
import SearchButtonMobile from './Mobile Navbar/SearchButtonMobile'
import ActivityButtonMobile from './Mobile Navbar/ActivityButtonMobile';
import MoreButtonMobile from './Mobile Navbar/MoreButtonMobile';
import CloseButtonMobile from './Mobile Navbar/CloseButton'

export default function AuthButtonsRow({
  onMoreClick,
  moreOpen
}) {
  return (
    <div className={styles.authRow}>
      <HomeButton />
      <PersonasMobileButton />
      <SearchButtonMobile />
      <ActivityButtonMobile />

      {moreOpen ? (
        <CloseButtonMobile onClick={onMoreClick} />
      ) : (
        <MoreButtonMobile onClick={onMoreClick} />
      )}
    </div>
  );
}