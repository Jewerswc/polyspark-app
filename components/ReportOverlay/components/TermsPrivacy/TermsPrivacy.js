import React from 'react';
import Terms from './components/Terms/terms';
import Privacy from './components/Privacy/privacy';
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
