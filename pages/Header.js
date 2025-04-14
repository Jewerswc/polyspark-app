import React, { useState } from 'react';
import SignupOverlay from './LoginOverlay';
import styles from './Header.module.css';
import PolysparkLogo from './PolysparkLogo';
import SearchInput from './SearchInput';
import ButtonRow from './FiveWidgets';         
import AuthAndHamburgerRow from './AuthAndHamburger';
import TopNavbarBottomRow from './TopNavbarBottomRow'

export default function Header() {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const openOverlay = () => {
    setOverlayVisible(true);
  };

  const closeOverlay = () => {
    setOverlayVisible(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <PolysparkLogo />
        <div className={styles.flexGrow}>
  <SearchInput />
</div>
        <ButtonRow />
        <AuthAndHamburgerRow 
        onSignupClick={openOverlay} 
        onLoginClick={openOverlay}
      />

      {isOverlayVisible && (
        <SignupOverlay 
          onGoogleContinue={() => console.log("Google Continue")}
          onEmailContinue={(email) => console.log("Email submitted:", email)}
          onClose={closeOverlay}
        />
      )}
      </div>

      <div className={styles.bottomRow}>
      <TopNavbarBottomRow />
      </div>
    </header>
  );
}