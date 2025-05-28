// components/LoginOverlay/OTPInput/OTPInput.jsx
import React, { useState } from 'react';
import ContinueButton from './ContinueButton/ContinueButton';
import styles from './OTPInput.module.css';

export default function OTPInputWithButton({ email, onContinue, onBack, error }) {
  const [otp, setOtp] = useState('');

  return (
    <div className={styles.container}>
      <p className={styles.instruction}>
        Enter the 6-digit code sent to <strong>{email}</strong>
      </p>


      <div className={styles.wrapper}>





      <input
      type="text"
      pattern="^[0-9]{6}$"
      inputMode="numeric"
      maxLength={6}
      required
      className={styles.textInput}
      autoCapitalize="none"
      autoCorrect="off"
      value={otp}                          // ← bind state
      onChange={e => {
        // keep only digits
        const val = e.target.value.replace(/\D/g, '').slice(0, 6);
        setOtp(val);
      }}
  
    />
 
        <ContinueButton onClick={() => onContinue(otp)} disabled={otp.length !== 6}>
        Continue
      </ContinueButton>

      </div>

      <button className={styles.back} onClick={onBack}>
        ← Back
      </button>

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
