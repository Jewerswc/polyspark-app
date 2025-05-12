// AuthorTag.jsx
import React from 'react';
import { useRouter } from 'next/router';
import styles from './AuthorTag.module.css';

export default function AuthorTag({ name, handle }) {
  const router = useRouter();

    const onClick = () => {
        if (handle) {
          router.push(`/profile/${handle}`);
        }
      };

  return (
    <button
      className={styles.authorTag}
      onClick={onClick}
    >
      {name || 'Unknown Author'}
    </button>
  );
}
