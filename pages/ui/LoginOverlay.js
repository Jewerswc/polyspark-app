import React from 'react';
import styles from './LoginOverlay.module.css';

import EmailInputWithButton from './Login Overlay/EmailInput'; 
import GoogleButton from './Login Overlay/ContinueWithGoogle';
import TermsPrivacy from './Login Overlay/TermsPrivacy';
import ORDivider from './Login Overlay/OrDivider';

export default function SignupOverlay({ onGoogleContinue, onEmailContinue, onClose }) {
  return (
    <div className={styles.overlay} onClick={onClose}>

      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.heading}>Welcome to PolySpark</h2>

        <GoogleButton onClick={onGoogleContinue} />
        <ORDivider/>
        <EmailInputWithButton onContinue={onEmailContinue} />
        <TermsPrivacy/>

  
      </div>
    </div>
  );
}
