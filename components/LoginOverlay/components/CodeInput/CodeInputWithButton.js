import React, { useState } from 'react';
import CodeInput from './CodeInput';
import ContinueButton from './ContinueButton/ContinueButton';
import styles from './EmailInput.module.css';

export default function EmailInputWithButton({ onContinue }) {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContinue = () => {
    // If the parent component passed in a callback, call it with the current email
    if (onContinue) {
      onContinue(email);
    }
  };

  return (
    <div className={styles.wrapper}>
      <CodeInput
        placeholder="Enter Code"
        value={email}
        onChange={handleInputChange}
      />
      <ContinueButton onClick={handleContinue}>
        Continue
      </ContinueButton>
    </div>
  );
}
