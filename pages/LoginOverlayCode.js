import React from 'react';
import styles from './LoginOverlayCode.module.css';

/* Import your existing components */
import CodeInputWithButton from './Login Overlay/CodeInputWithButton'; 
import GoogleButton from './Login Overlay/ContinueWithGoogle';
import TermsPrivacy from './Login Overlay/TermsPrivacy';
import Divider from './Login Overlay/Divider';

export default function SignupOverlay({ onGoogleContinue, onEmailContinue, onClose }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      {/* 
        Stop click events on the card from closing the overlay.
        If you don't want overlay-close behavior, remove the onClick above.
      */}
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.heading}>We've Sent You a Code</h2>

        <h3 className={styles.headingthree}>Please enter the secret code to you at 
        <strong>exampleemail@gmail.com</strong></h3>

        <CodeInputWithButton onContinue={onEmailContinue} />
        <TermsPrivacy/>

  
      </div>
    </div>
  );
}
