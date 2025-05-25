import React, { useState } from 'react';
import styles from './Header.module.css'
import AuthandHamburgerSecondary from '../../Header/components/AuthControls/AuthandHamburgerSecondary'
import PolysparkLogo from '../../Header/components/Logo/Logo.module'
import SignupOverlay from '../ui/LoginOverlay';

export default function Header() {
    const [isOverlayVisible, setOverlayVisible] = useState(false);
  
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
  