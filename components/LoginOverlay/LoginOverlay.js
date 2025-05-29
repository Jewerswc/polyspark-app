import React, { useEffect, useState } from 'react';
import styles from './LoginOverlay.module.css';
import ContinueWithGoogleButton from './components/ContinueWithGoogle/ContinueWithGoogle';
import ORDivider from './components/Divider/OrDivider';
import EmailInputWithButton from './components/EmailInput/EmailInput';
import TermsPrivacy from './components/TermsPrivacy';
import OTPInputWithButton from './components/OTPinput';
import API from './../../lib/api';


export default function LoginOverlay({ onLoginSuccess, onClose }) {
  const [error, setError] = useState('');
  const [stage, setStage] = useState('choose');
  const [email, setEmail] = useState('');

  // Email → send OTP
  const handleEmailContinue = async (emailArg) => {
    setError('');
    try {
      await API.post('send_otp/', { email: emailArg });
      setEmail(emailArg);
      setStage('otp');
    } catch (e) {
      setError(e.response?.data?.error || 'Failed to send OTP.');
    }
  };

  const handleOtpContinue = async (otp) => {
    setError('');
    let res;
    try {
      res = await API.post('verify_otp/', { email, otp });
    } catch (err) {
      console.error(err.response || err);
      return setError(err.response?.data?.error || 'Invalid or expired OTP.');
    }
    localStorage.setItem('accessToken', res.data.access);
    localStorage.setItem('refreshToken', res.data.refresh);
    API.setAuthToken(res.data.access);
    onLoginSuccess();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.card} onClick={e => e.stopPropagation()}>
        <h2 className={styles.heading}>Welcome to Polyspark</h2>

        {stage === 'choose' && (
          <>
            <ContinueWithGoogleButton
              onLoginSuccess={onLoginSuccess}
            />

            <ORDivider />

            <EmailInputWithButton
              onContinue={handleEmailContinue}
            />
            {error && <p className={styles.error}>{error}</p>}
          </>
        )}

        {stage === 'otp' && (
          <OTPInputWithButton
            email={email}
            error={error}
            onBack={() => {
              setError('');
              setStage('choose');
            }}
            onContinue={handleOtpContinue}
          />
        )}

        <TermsPrivacy/>
      </div>
    </div>
  );
}