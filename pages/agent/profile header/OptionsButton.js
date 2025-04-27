// OptionsButton.jsx
import React, { useState, useRef, useEffect } from 'react';
import MoreDots from './MoreDots';
import ChatNowButton from './../../Dropdown';
import styles from './OptionsButton.module.css';

export default function OptionsButton({ options = [] }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <button
        className={styles.menuButton}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
      >
        <MoreDots className={styles.moreIcon} />
      </button>

      {open && (
        <div className={styles.dropdown}>
          <ChatNowButton options={options} />
        </div>
      )}
    </div>
  );
}
