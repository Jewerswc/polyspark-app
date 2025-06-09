// src/components/UserProfileCard/LoginOverlayMobile.js
import React, { useState } from 'react';
import { X } from 'react-bootstrap-icons';
import API from './../../../lib/api';               
import styles from './LoginOverlayMobile.module.css';

import Welcome from './Welcome/Welcome';
import ContinueWithGoogleButton from './ContinueWithGoogle/ContinueWithGoogleMobile';
import ORDivider from './Divider/Divider';
import EmailInputWithButton from './EmailInput/EmailInput';
import OTPInputWithButtonMobile from './OtpInput/OTPinput';
import TermsPrivacy from './TermsPrivacy/TermsPrivacy';

export default function LoginOverlayMobile({ onLoginSuccess, onClose }) {
  const [error, setError]         = useState('');
  const [stage, setStage]         = useState('choose');  // 'choose' | 'otp' | 'username'
  const [email, setEmail]         = useState('');

  // 1) Send OTP to email
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

  // 2) Verify OTP, decide if new user or success
  const handleOtpContinue = async (otp) => {
    setError('');
    let res;
    try {
      res = await API.post('verify_otp/', { email, otp });
    } catch (err) {
      console.error(err.response || err);
      return setError(err.response?.data?.error || 'Invalid or expired OTP.');
    }

    // store tokens
    localStorage.setItem('accessToken',  res.data.access);
    localStorage.setItem('refreshToken', res.data.refresh);
    API.setAuthToken(res.data.access);

    // new user → username stage, else finish
    if (res.data.is_new_user) {
      setStage('username');
    } else {
      onLoginSuccess();
    }
  };

  // 3) Username chosen for new user
  const handleUsernameChosen = ({ username, subscribeUpdates }) => {
    // UsernameOverlayMobile should already have done the sign-up calls
    onLoginSuccess({ username, subscribeUpdates });
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.closeContainer}>
        <X size={24} className={styles.closeIcon} onClick={onClose} />
      </div>

      <div className={styles.card}>

        {stage === 'choose' && (
          <>
            <img
              src="/Images/Frame 224.png"
              className={styles.avatar}
              alt="avatar"
              style={{ cursor: 'pointer' }}
            />
            <Welcome />

            <ContinueWithGoogleButton
              onLoginSuccess={(payload) => {
                if (payload.is_new_user) {
                  setStage('username');
                } else {
                  onLoginSuccess();
                }
              }}
            />

            <ORDivider />

            <EmailInputWithButton
              onContinue={handleEmailContinue}
              error={error}
            />

            <TermsPrivacy />
          </>
        )}

        {stage === 'otp' && (
          <>
                      <img
              src="/Images/Frame 224.png"
              className={styles.avatar}
              alt="avatar"
              style={{ cursor: 'pointer' }}
            />
            <Welcome />
            <OTPInputWithButtonMobile
              email={email}
              onBack={() => { setError(''); setStage('choose'); }}
              onContinue={handleOtpContinue}
              error={error}
            />
            <TermsPrivacy />
          </>
        )}



      </div>
    </div>
  );
}
