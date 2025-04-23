// src/components/UserProfileCard/UserProfileCard.js
import React from 'react';
import { X } from 'react-bootstrap-icons';
import styles from './LoginOverlayMobile.module.css';
import Welcome from './Welcome';
import ContinueWithGoogleButton from './Login Overlay/ContinueWithGoogleMobile';
import ORDivider from './Login Overlay/OrDivider';
import EmailInputWithButton from './Login Overlay/EmailInput';
import TermsPrivacy from './Login Overlay/TermsPrivacy';

export default function UserProfileCard({ onClose }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.closeContainer}>
        <X size={24} className={styles.closeIcon} onClick={onClose} />
      </div>
      <div className={styles.card}>
        <img
          src="./Images/Frame 224.png"
          className={styles.avatar}
          style={{ cursor: 'pointer' }}
        />
        <Welcome />
        <ContinueWithGoogleButton />
        <ORDivider />
        <EmailInputWithButton />
        <TermsPrivacy />
      </div>
    </div>
  );
}
