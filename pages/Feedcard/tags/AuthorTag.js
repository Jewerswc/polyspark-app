// AuthorTag.jsx
import React from 'react';
import { useRouter } from 'next/router';
import styles from './AuthorTag.module.css';

export default function AuthorTag() {
  const router = useRouter();

  return (
    <button
      className={styles.authorTag}
      onClick={() => router.push('/profile/chrisparker')}
    >
      Alex Doe
    </button>
  );
}
