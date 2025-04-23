import React, { useState } from 'react';
import SignupOverlay from './../LoginOverlay';
import ChatOverlay from '../ui/ChatOverlay';
import styles from './Header.module.css';
import PolysparkLogo from './Header/PolysparkLogo';
import SearchInput from './Header/Search/SearchInput';
import ButtonRow from './Header/FiveWidgets';         
import AuthAndHamburgerRow from './Header/AuthAndHamburger';
import TopNavbarBottomRow from './Header/TopNavbarBottomRow';

export default function Header() {
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [isChatOverlayVisible, setChatOverlayVisible] = useState(false);

  const openOverlay = () => {
    setOverlayVisible(true);
  };

  const closeOverlay = () => {
    setOverlayVisible(false);
  };

  const openChatOverlay = () => {
    setChatOverlayVisible(true);
  };

  const closeChatOverlay = () => {
    setChatOverlayVisible(false);
  };

  return (
    <div>
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
        </div>
        <div className={styles.bottomRow}>
          <TopNavbarBottomRow />
        </div>
      </header>

      {/* Conditionally render the SignupOverlay */}
      {isOverlayVisible && (
        <SignupOverlay 
          onGoogleContinue={() => console.log("Google Continue")}
          onEmailContinue={(email) => console.log("Email submitted:", email)}
          onClose={closeOverlay}
        />
      )}

      {/* Similarly, if needed, conditionally render the ChatOverlay */}
      {isChatOverlayVisible && (
        <ChatOverlay 
          onClose={closeChatOverlay}
        />
      )}
    </div>
  );
}
