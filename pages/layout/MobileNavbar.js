import React from 'react';

import styles from './MobileNavbar.module.css';
import HomeButton from './Mobile Navbar/HomeButton';
import PersonasMobileButton from './Mobile Navbar/PersonasMobileButton';
import SearchButtonMobile from './Mobile Navbar/SearchButtonMobile'
import ActivityButtonMobile from './Mobile Navbar/ActivityButtonMobile';
import MoreButtonMobile from './Mobile Navbar/MoreButtonMobile';

export default function AuthButtonsRow({ onLoginClick, onSignupClick, onMoreClick }) {
  return (
    <div className={styles.authRow}>
        <HomeButton/>
        <PersonasMobileButton />
        <SearchButtonMobile />
        <ActivityButtonMobile />
        <MoreButtonMobile onClick={onMoreClick} />

    </div>
  );
}
