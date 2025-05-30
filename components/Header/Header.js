import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import LoginOverlay from './../LoginOverlay/LoginOverlay';
import ChatOverlay from '../ChatOverlay/ChatOverlay';
import styles from './Header.module.css';
import PolysparkLogo from './components/Logo/Logo.module';
import SearchInput from './components/Search/components/SearchInput/SearchInput';
import ButtonRow from './components/PrimaryNav/PrimaryNav';         
import AuthAndHamburgerRow from './components/AuthControls/AuthControls';
import TopNavbarBottomRow from './components/CategoryNav/CategoryNav';
import ReportOverlay from '../ReportOverlay/ReportOverlay'
import AvatarMenu from './AvatarMenu';

export default function Header({
    activeCategory,
    onCategorySelect
  }) {
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [isChatOverlayVisible, setChatOverlayVisible] = useState(false);
  const [isReportVisible, setReportVisible] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false)
  // on mount, seed from your real token store
  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    setLoggedIn(!!token)
  }, [])
  
  const router = useRouter();
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
          <div className={styles.authWrapper}>
      {/* the “not-logged-in” controls */}
      <div className={`${styles.authControls} ${isLoggedIn ? styles.hidden : ''}`}>
        <AuthAndHamburgerRow 
          onSignupClick={openOverlay} 
          onLoginClick={openOverlay}
          onReportClick={openReportOverlay}
        />
      </div>

      {/* the “logged-in” avatar arrow */}
      <div className={`${styles.loggedIn} ${isLoggedIn ? '' : styles.hidden}`}>
        <AvatarMenu
                  onReportClick={openReportOverlay}

       
        />
      </div>
    </div>
  </div>
        <div className={styles.bottomRow}>
               
          <TopNavbarBottomRow
            activeCategory={activeCategory}
            onCategorySelect={onCategorySelect}
          />        </div>
      </header>
      {isOverlayVisible && (
        <LoginOverlay 
          onGoogleContinue={() => console.log("Google Continue")}
          onEmailContinue={(email) => console.log("Email submitted:", email)}
          onClose={closeOverlay}
          onLoginSuccess={() => {
            setOverlayVisible(false);           // 👈 hide the modal
            setLoggedIn(true); 
          }}
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
