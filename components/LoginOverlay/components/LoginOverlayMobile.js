// src/components/UserProfileCard/UserProfileCard.js
import React from 'react';
import { X } from 'react-bootstrap-icons';
import styles from './LoginOverlayMobile.module.css';
import Welcome from './Welcome/Welcome';
import ContinueWithGoogleButton from './ContinueWithGoogle/ContinueWithGoogleMobile';
import ORDivider from './Divider/OrDivider';
import EmailInputWithButton from './EmailInput/EmailInput';
import TermsPrivacy from './TermsPrivacy';
import API from './../../../lib/api';

export default function UserProfileCard({ onLoginSuccess, onClose }) {
  const [step, setStep]   = useState('email'); 
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailContinue = async (emailValue) => {
    setError('');
    setEmail(emailValue);
    try {
      await API.post('send_otp/', { email: emailValue });
      setStep('otp');
    } catch (e) {
      setError(e.response?.data?.error || 'Unable to send code.');
    }
  };

  const handleOTPContinue = async (code) => {
    setError('');
    try {
      const res = await API.post('verify_otp/', { email, otp: code });
      const { access, refresh } = res.data;
      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);
      API.setAuthToken(access);
      onLoginSuccess();   // ← now this will be the function MainPage passed in
    } catch (e) {
      setError(e.response?.data?.error || 'Invalid or expired code.');
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.card} onClick={e => e.stopPropagation()}>
        {step === 'email' ? (
          <EmailInputWithButton
            onContinue={handleEmailContinue}
            error={error}
          />
        ) : (
          <OTPInputWithButton
            email={email}
            onContinue={handleOTPContinue}
            onBack={() => setStep('email')}
            error={error}
          />
        )}
        {/* … rest of your UI … */}
      </div>
    </div>
  );
}