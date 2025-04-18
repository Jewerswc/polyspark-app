import React from 'react';

import styles from './MobileNavbar.module.css';
import HomeButton from './HomeButton';
import PersonasMobileButton from './PersonasMobileButton';
import SearchButtonMobile from './SearchButtonMobile'
import ActivityButtonMobile from './ActivityButtonMobile';
import MoreButtonMobile from './MoreButtonMobile';

export default function AuthButtonsRow({ onLoginClick, onSignupClick }) {
  return (
    <div className={styles.authRow}>
        <HomeButton/>
        <PersonasMobileButton />
        <SearchButtonMobile />
        <ActivityButtonMobile />
        <MoreButtonMobile />

    </div>
  );
}
