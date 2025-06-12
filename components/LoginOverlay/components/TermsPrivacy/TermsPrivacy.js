import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Terms from './components/Terms/terms';
import Privacy from './components/Privacy/privacy';
import styles from './TermsPrivacy.module.css';

export default function TermsPrivacy({ onTermsClick, onPrivacyClick }) {
  return (
    <div className={styles.container}>
      <Link href="/terms">
        <Terms />
      </Link>      <span className={styles.separator}>•</span>
      <Link href="/privacy">
      <Privacy onClick={onPrivacyClick} />
      </Link>
    </div>
  );
}
