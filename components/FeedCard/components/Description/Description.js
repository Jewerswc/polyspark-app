// src/components/FeedCardDescription.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './Description.module.css';

export default function Description({ text, slug }) {
  const router = useRouter();
  const clampedRef = useRef(null);
  const fullTextRef = useRef(null);
  const [isTruncated, setIsTruncated] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    if (clampedRef.current && fullTextRef.current) {
      const clampedHeight = clampedRef.current.clientHeight;
      const fullHeight = fullTextRef.current.clientHeight;
      setIsTruncated(fullHeight > clampedHeight);
    }
  }, [text]);

  const handleReadMore = () => {
    router.push('/article');
  };

  return (
    <div className={styles.descriptionContainer}>
      
              <a
              href={`/articles/${slug}`}
      ref={clampedRef} className={styles.descriptionText}>
        {text}
      </a>

      {hasMounted && isTruncated && (
        <span
          className={styles.readMore}
          role="button"
          tabIndex={0}
          
          onKeyPress={e => e.key === 'Enter' && handleReadMore()}
        >
          Read More
        </span>
      )}

      {hasMounted && (
        <p ref={fullTextRef} className={styles.fullText} aria-hidden="true">
          {text}
        </p>
      )}
    </div>
  );
}
