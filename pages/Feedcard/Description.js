import React, { useState, useRef, useEffect } from 'react';
import styles from './Description.module.css';

export default function FeedCardDescription({ text, onReadMore }) {
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

  return (
    <div className={styles.descriptionContainer}>
      <p ref={clampedRef} className={styles.descriptionText}>
        {text}
      </p>
      {hasMounted && isTruncated && (
        <span className={styles.readMore} onClick={onReadMore}>
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
