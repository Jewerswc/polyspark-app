import React, { useEffect, useState } from 'react';
import styles from './LoginOverlay.module.css';
import GoogleButton from './components/ContinueWithGoogle/ContinueWithGoogle';
import ORDivider from './components/Divider/OrDivider';
import EmailInputWithButton from './components/EmailInput/EmailInput';
import TermsPrivacy from './components/TermsPrivacy';
import OTPInputWithButton from './components/OTPinput';
import API from './../../lib/api';

export default function LoginOverlay({ onLoginSuccess, onClose }) {
  const [error, setError] = useState('');
  const [stage, setStage] = useState('choose');  // no TypeScript here
  const [email, setEmail] = useState('');

  // 1️⃣ Google handler (unchanged)
  const handleCredentialResponse = async ({ credential }) => {
    try {
      const res = await API.post('google_auth/', { credential });
      const { access, refresh } = res.data;
      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);
      API.setAuthToken(access);
      onLoginSuccess();
    } catch (e) {
      console.error(e);
      setError(e.response?.data?.error || 'Google login failed.');
    }
  };

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window.google &&
      window.google.accounts &&
      !window._gsiInitialized
    ) {
      window.google.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
      });
      window._gsiInitialized = true;
    }
  }, []);

  const handleGoogleContinue = () => {
    if (window.google && window.google.accounts) {
      window.google.accounts.id.prompt();
    } else {
      setError('Google SDK not loaded yet.');
    }
  };

  // 2️⃣ Email → send OTP (no `: string`)
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
    setError('');    // clear any old error
  
    let res;
    try {
      // only the API call in the try
      res = await API.post('verify_otp/', { email, otp });
      console.log('✅ verify_otp status:', res.status);
      console.log('✅ verify_otp data:', res.data);
    } catch (err) {
      // now this only catches network/422/500 errors
      console.error('❌ verify_otp error:', err.response || err);
      return setError(
        err.response?.data?.error ||
        'Invalid or expired OTP.'
      );
    }
  
    //—outside—of the try/catch—store tokens & call success
    localStorage.setItem('accessToken', res.data.access);
    localStorage.setItem('refreshToken', res.data.refresh);
    API.setAuthToken(res.data.access);
  
    onLoginSuccess();
  };
  
  

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.card} onClick={e => e.stopPropagation()}>
        <h2 className={styles.heading}>Welcome to PolySpark</h2>

        {stage === 'choose' && (
          <>
            <GoogleButton onClick={handleGoogleContinue} />

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