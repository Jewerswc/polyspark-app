import React, { useEffect, useState } from 'react';
import styles from './LoginOverlay.module.css';
import GoogleButton from './ContinueWithGoogle/ContinueWithGoogle';
import ORDivider from './Divider/OrDivider';
import EmailInputWithButton from './EmailInput/EmailInput';
import TermsPrivacy from './TermsPrivacy';
import API from './../../../pages/api/api';

export default function SignupOverlay({ onLoginSuccess, onClose }) {
  const [error, setError] = useState('');

  // 1️⃣ Handles the credential once Google returns it
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

  // 2️⃣ Initialize *once* on mount
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

  // 3️⃣ Your custom button simply fires the GSI prompt
  const handleGoogleContinue = () => {
    if (window.google && window.google.accounts) {
      window.google.accounts.id.prompt(); // this will pop up the Google chooser / One-Tap
    } else {
      setError('Google SDK not loaded yet.');
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.card} onClick={e => e.stopPropagation()}>
        <h2 className={styles.heading}>Welcome to PolySpark</h2>

        <GoogleButton onClick={handleGoogleContinue} />
        {error && <p className={styles.error}>{error}</p>}

        <ORDivider/>
        <EmailInputWithButton style={{ opacity: 0.3 }} disabled />
        <TermsPrivacy/>
      </div>
    </div>
  );
}
