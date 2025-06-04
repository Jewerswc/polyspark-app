import React, { useState } from 'react';
import styles from './LoginOverlay.module.css';
import ContinueWithGoogleButton from './components/ContinueWithGoogle/ContinueWithGoogle';
import ORDivider from './components/Divider/OrDivider';
import EmailInputWithButton from './components/EmailInput/EmailInput';
import TermsPrivacy from './components/TermsPrivacy';
import UsernameOverlay from './../../pages/UsernameOverlay';
import OTPInputWithButton from './components/OTPinput';
import API from './../../lib/api';

export default function LoginOverlay({ onLoginSuccess, onClose }) {
  const [error, setError] = useState('');
  const [stage, setStage] = useState('choose');
  const [email, setEmail] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);

  // 1) Email → send OTP
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

  // 2) OTP → verify
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

    if (res.data.is_new_user) {
      setIsNewUser(true);
      setStage('username');
    } else {
      onLoginSuccess();
    }
  };

  const handleGoogleLogin = (payload = {}) => {
    const is_new_user = payload.is_new_user; // safe even if payload isn’t an object
    if (is_new_user) {
      setIsNewUser(true);
      setStage('username');
    } else {
      onLoginSuccess();
    }
  };

  // 4) Username chosen: receives { username, subscribeUpdates }
  const handleUsernameChosen = ({ username, subscribeUpdates }) => {
    // (UsernameOverlay already did the POST/PATCH)
    onLoginSuccess();
  };

  return (
    <>
      {stage === 'choose' && (
        <div className={styles.overlay} onClick={onClose}>
          <div className={styles.card} onClick={(e) => e.stopPropagation()}>
            <h2 className={styles.heading}>Welcome to Polyspark</h2>
            <ContinueWithGoogleButton onLoginSuccess={handleGoogleLogin} />
            <ORDivider />
            <EmailInputWithButton onContinue={handleEmailContinue} />
            {error && <p className={styles.error}>{error}</p>}
            <TermsPrivacy />
          </div>
        </div>
      )}

      {stage === 'otp' && (
        <div className={styles.overlay} onClick={onClose}>
          <div className={styles.card} onClick={(e) => e.stopPropagation()}>
            <h2 className={styles.heading}>Enter the OTP</h2>
            <OTPInputWithButton
              email={email}
              error={error}
              onBack={() => {
                setError('');
                setStage('choose');
              }}
              onContinue={handleOtpContinue}
            />
            <TermsPrivacy />
          </div>
        </div>
      )}

      {stage === 'username' && isNewUser && (
        <UsernameOverlay onLoginSuccess={handleUsernameChosen} />
      )}
    </>
  );
}
