import React from 'react';
import PropTypes from 'prop-types';
import ContinueWithGoogleButton from './ContinueWithGoogle/ContinueWithGoogle';
import ORDivider from './Divider/Divider';
import EmailInputWithButton from './EmailInput/EmailInput';
import TermsPrivacy from './TermsPrivacy/TermsPrivacy';
import ModalCard from './ModalCard/ModalCard';
import styles from './../LoginOverlay.module.css'; // you can reuse the same CSS

/**
 * Props:
 *   - onEmailContinue(emailStr)
 *   - onGoogleLogin(payload)
 *   - error (string)
 *   - onClose()
 */
export default function ChooseLoginMethod({
  onEmailContinue,
  onGoogleLogin,
  error,
  onClose,
}) {
  return (
    <ModalCard onClose={onClose}>
      <h2 className={styles.heading}>Welcome to Polyspark</h2>
      <ContinueWithGoogleButton onLoginSuccess={onGoogleLogin} />
      <ORDivider />
      <EmailInputWithButton onContinue={onEmailContinue} />
      {error && <p className={styles.error}>{error}</p>}
      <TermsPrivacy />
    </ModalCard>
  );
}

ChooseLoginMethod.propTypes = {
  onEmailContinue: PropTypes.func.isRequired,
  onGoogleLogin: PropTypes.func.isRequired,
  error: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
ChooseLoginMethod.defaultProps = {
  error: '',
};
