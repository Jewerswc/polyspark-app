import React from 'react';
import styles from './LoginOverlay.module.css';

/* Import your existing components */
import EmailInputWithButton from './Login Overlay/EmailInput'; 
import GoogleButton from './Login Overlay/ContinueWithGoogle';
import TermsPrivacy from './Login Overlay/TermsPrivacy';
import ORDivider from './Login Overlay/OrDivider';

export default function SignupOverlay({ onGoogleContinue, onEmailContinue, onClose }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      {/* 
        Stop click events on the card from closing the overlay.
        If you don't want overlay-close behavior, remove the onClick above.
      */}
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.heading}>Welcome to Polyspark</h2>

        <GoogleButton onClick={onGoogleContinue} />
        <ORDivider/>
        <EmailInputWithButton onContinue={onEmailContinue} />
        <TermsPrivacy/>

  
      </div>
    </div>
  );
}
