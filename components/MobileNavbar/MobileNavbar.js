import React from 'react';

import styles from './MobileNavbar.module.css';
import HomeButton from './components/HomeButton/HomeButton';
import PersonasMobileButton from './components/PersonasButton/PersonasMobileButton';
import SearchButtonMobile from './components/SearchButton/SearchButtonMobile'
import ActivityButtonMobile from './components/ActivityButton/ActivityButtonMobile';
import MoreButtonMobile from './components/MoreButton/MoreButtonMobile';
import CloseButtonMobile from './components/CloseButton/CloseButton'

export default function AuthButtonsRow({
  onMoreClick,
  moreOpen, 
  onSearchClick
}) {
  return (
    <div className={styles.authRow}>
      <HomeButton />
      <PersonasMobileButton />
      <SearchButtonMobile onClick={onSearchClick} />
      <ActivityButtonMobile />

      {moreOpen ? (
        <CloseButtonMobile onClick={onMoreClick} />
      ) : (
        <MoreButtonMobile onClick={onMoreClick} />
      )}
    </div>
  );
}