import React, { useState } from 'react';
import styles from './ArticleHeader.module.css'
import AuthandHamburgerSecondary from './../AuthandHamburgerSecondary'
import PolysparkLogo from './../PolysparkLogo'
import SignupOverlay from './../LoginOverlay';

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
    <PolysparkLogo/>

      <AuthandHamburgerSecondary                   
            onSignupClick={openOverlay} 
            onLoginClick={openOverlay}
                />

    </header>

      {isOverlayVisible && (
        <SignupOverlay 
          onGoogleContinue={() => console.log("Google Continue")}
          onEmailContinue={(email) => console.log("Email submitted:", email)}
          onClose={closeOverlay}
        />
      )}
      </div>
    );
  }
  