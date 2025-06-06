// src/components/LoginOverlay/LoginOverlay.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import API from './../../lib/api';

import ChooseLoginMethod from './components/ChooseLoginMethod';
import EnterOtpView from './components/EnterOtpView';
import UsernameOverlay from './../../pages/UsernameOverlay';

export default function LoginOverlay({ onLoginSuccess, onClose }) {
  const [error, setError] = useState('');
  const [stage, setStage] = useState('choose'); // 'choose' | 'otp' | 'username'
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

  // 3) Google Login result
  const handleGoogleLogin = (payload = {}) => {
    const is_new_user = payload.is_new_user || false;
    if (is_new_user) {
      setIsNewUser(true);
      setStage('username');
    } else {
      onLoginSuccess();
    }
  };

  // 4) Username chosen (new user)
  const handleUsernameChosen = ({ username, subscribeUpdates }) => {
    // (UsernameOverlay is assumed to have already done its user-create request)
    onLoginSuccess();
  };


  switch (stage) {
    case 'choose':
      return (
        <ChooseLoginMethod
          onEmailContinue={handleEmailContinue}
          onGoogleLogin ={handleGoogleLogin}
          error={error}
          onClose={onClose}
        />
      );

    case 'otp':
      return (
        <EnterOtpView
          email          ={email}
          error          ={error}
          onBack         ={() => { setError(''); setStage('choose'); }}
          onOtpContinue  ={handleOtpContinue}
          onClose        ={onClose}
        />
      );

    case 'username':
      return isNewUser ? (
        <UsernameOverlay onLoginSuccess={handleUsernameChosen} />
      ) : null;

    default:
      return null;
  }
}

LoginOverlay.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
  onClose:        PropTypes.func.isRequired,
};