import React, { useState, useRef, useEffect } from 'react';
import MoreDots from './MoreDots';
import styles from './MenuOptions.module.css';

export default function MenuOptions({ options = [] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
      <button
        className={styles.menuButton}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
      >
        <MoreDots className={styles.moreIcon} />
      </button>

  );
}
