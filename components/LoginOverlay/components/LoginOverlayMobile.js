// src/components/UserProfileCard/UserProfileCard.js
import React, { useEffect, useState } from 'react';
import { X } from 'react-bootstrap-icons';
import styles from './LoginOverlayMobile.module.css';
import Welcome from './Welcome/Welcome';
import ContinueWithGoogleButton from './ContinueWithGoogle/ContinueWithGoogleMobile';
import ORDivider from './Divider/Divider';
import EmailInputWithButton from './EmailInput/EmailInput';
import TermsPrivacy from './TermsPrivacy/TermsPrivacy';

export default function LoginOverlayMobile({ onLoginSuccess, onClose }) {
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
    <div className={styles.overlay}>
      <div className={styles.closeContainer}>
        <X size={24} className={styles.closeIcon} onClick={onClose} />
      </div>
      <div className={styles.card}>
        <img
          src="/Images/Frame 224.png"
          className={styles.avatar}
          style={{ cursor: 'pointer' }}
        />
        <Welcome />
         <ContinueWithGoogleButton
                      onLoginSuccess={onLoginSuccess}
                    />
        <ORDivider />
        <EmailInputWithButton />
        <TermsPrivacy />

      </div>
    </div>
  );
}