import React, { useState } from 'react';
import styles from './Commentsout.module.css'
import LikeButton from './LikeButton/LikeButton'
import SignupOverlay from './../../../../LoginOverlay/LoginOverlay';

import AuthAndHamburgerSecondary from '../../../../Header/components/AuthControls/AuthButtons/AuthButtonsSecondary';

export default function Footer({}) {
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
    <div className={styles.container}>
      {/* New prompt above the button */}
      <div className={styles.loginPrompt}>
        Login to view and leave a comment.
      </div>

      <AuthAndHamburgerSecondary             
      onSignupClick={openOverlay} 
            onLoginClick={openOverlay}/>

                  {isOverlayVisible && (
                    <SignupOverlay 
                      onGoogleContinue={() => console.log("Google Continue")}
                      onEmailContinue={(email) => console.log("Email submitted:", email)}
                      onClose={closeOverlay}
                    />
                  )}
    </div>
    
  )
}
