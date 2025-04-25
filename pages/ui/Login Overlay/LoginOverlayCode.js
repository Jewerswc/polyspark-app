import React from 'react';
import styles from './LoginOverlayCode.module.css';

/* Import your existing components */
import CodeInputWithButton from './CodeInputWithButton'; 
import TermsPrivacy from './TermsPrivacy';

export default function SignupOverlay({ onEmailContinue, onClose }) {
  return (
    <div className={styles.overlay} onClick={onClose}>

      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.heading}>We&apos;ve Sent You a Code</h2>

        <h3 className={styles.headingthree}>Please enter the secret code to you at 
        <strong>exampleemail@gmail.com</strong></h3>

        <CodeInputWithButton onContinue={onEmailContinue} />
        <TermsPrivacy/>

  
      </div>
    </div>
  );
}
