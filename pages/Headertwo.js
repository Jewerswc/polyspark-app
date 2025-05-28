import React, { useState } from 'react';
import { useRouter } from 'next/router';
import LoginOverlay from './../components/LoginOverlay/LoginOverlay';
import ChatOverlay from './../components/ChatOverlay/ChatOverlay';
import styles from './../components/Header/Header.module.css';
import PolysparkLogo from './../components/Header/components/Logo/Logo.module';
import SearchInput from './../components/Header/components/Search/components/SearchInput/SearchInput';
import ButtonRow from './../components/Header/components/PrimaryNav/PrimaryNav';         
import Loggedin from './Loggedin'
import TopNavbarBottomRow from './../components/Header/components/CategoryNav/CategoryNav';
import ReportOverlay from './../components/ReportOverlay/ReportOverlay'

export default function Header({
    activeCategory,
    onCategorySelect
  }) {
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [isChatOverlayVisible, setChatOverlayVisible] = useState(false);
  const [isReportVisible, setReportVisible] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
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
          <Loggedin />
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
