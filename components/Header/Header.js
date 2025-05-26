import React, { useState } from 'react';
import SignupOverlay from './../LoginOverlay/components/LoginOverlay';
import ChatOverlay from '../ChatOverlay/ChatOverlay';
import styles from './Header.module.css';
import PolysparkLogo from './components/Logo/Logo.module';
import SearchInput from './components/Search/components/SearchInput/SearchInput';
import ButtonRow from './components/PrimaryNav/PrimaryNav';         
import AuthAndHamburgerRow from './components/AuthControls/AuthControls';
import TopNavbarBottomRow from './components/CategoryNav/CategoryNav';
import ReportOverlay from '../ReportOverlay/ReportOverlay'

export default function Header({
    activeCategory,
    onCategorySelect
  }) {
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
               
          <TopNavbarBottomRow
            activeCategory={activeCategory}
            onCategorySelect={onCategorySelect}
          />        </div>
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
