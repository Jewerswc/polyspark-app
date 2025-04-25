import React, { useState } from 'react';
import SignupOverlay from './../LoginOverlay';
import ChatOverlay from '../ui/ChatOverlay';
import styles from './Header.module.css';
import PolysparkLogo from './Header/PolysparkLogo';
import SearchInput from './Header/Search/SearchInput';
import ButtonRow from './Header/FiveWidgets';         
import AuthAndHamburgerRow from './Header/AuthAndHamburger';
import TopNavbarBottomRow from './Header/TopNavbarBottomRow';
import ReportOverlay from './../ReportOverlay'

export default function Header() {
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [isChatOverlayVisible, setChatOverlayVisible] = useState(false);
  const [isReportVisible, setReportVisible] = useState(false);

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
  const openReportOverlay = () => setReportVisible(true);
  const closeReportOverlay = () => setReportVisible(false);
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
            onReportClick={openReportOverlay}
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


      {isReportVisible && (
        <ReportOverlay 
          onClose={closeReportOverlay}
        />
      )}

      {isChatOverlayVisible && (
        <ChatOverlay 
          onClose={closeChatOverlay}
        />
      )}
      
    </div>
  );
}
