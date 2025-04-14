import React from 'react';
import Terms from './terms';
import Privacy from './privacy';
import styles from './TermsPrivacy.module.css';

export default function TermsPrivacy({ onTermsClick, onPrivacyClick }) {
  return (
    <div className={styles.container}>
      <Terms onClick={onTermsClick} />
      <span className={styles.separator}>•</span>
      <Privacy onClick={onPrivacyClick} />
    </div>
  );
}
