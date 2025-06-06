// src/components/LoginOverlay/EnterOtpView.jsx
import React from 'react';
import PropTypes from 'prop-types';
import OTPInputWithButton from './OtpInput/OTPinput';
import TermsPrivacy from './TermsPrivacy/TermsPrivacy';
import ModalCard from './ModalCard/ModalCard';
import styles from './../LoginOverlay.module.css';

export default function EnterOtpView({
  email,
  error,
  onBack,
  onOtpContinue,
  onClose,
}) {
  return (
    <ModalCard onClose={onClose}>
      <h2 className={styles.heading}>Enter the OTP</h2>
      <OTPInputWithButton
        email={email}
        error={error}
        onBack={onBack}
        onContinue={onOtpContinue}
      />
      <TermsPrivacy />
    </ModalCard>
  );
}

EnterOtpView.propTypes = {
  email: PropTypes.string.isRequired,
  error: PropTypes.string,
  onBack: PropTypes.func.isRequired,
  onOtpContinue: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
EnterOtpView.defaultProps = {
  error: '',
};
