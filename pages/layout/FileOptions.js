import React, { useState, useRef, useEffect } from 'react';
import styles from './FileOptions.module.css';

export default function FileOptions() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const ref1 = useRef();
  const ref2 = useRef();

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (open1 && ref1.current && !ref1.current.contains(e.target)) {
        setOpen1(false);
      }
      if (open2 && ref2.current && !ref2.current.contains(e.target)) {
        setOpen2(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open1, open2]);

  return (
    <div className={styles.container}>
      {/* First dropdown */}
      <div className={styles.dropdown} ref={ref1}>
        <button onClick={() => setOpen1(o => !o)}>
        Sort by: Date Published ▾
        </button>
        {open1 && (
          <ul className={styles.menu}>
            <li onClick={() => {/* handle PDF */}}>PDF</li>
            <li onClick={() => {/* handle DOCX */}}>DOCX</li>
            <li onClick={() => {/* handle TXT */}}>TXT</li>
          </ul>
        )}
      </div>

      {/* Second dropdown */}
      <div className={styles.dropdown} ref={ref2}>
        <button onClick={() => setOpen2(o => !o)}>
          Filter By: Agent ▾
        </button>
        {open2 && (
          <ul className={styles.menu}>
            <li onClick={() => {/* handle Google Drive */}}>Google Drive</li>
            <li onClick={() => {/* handle Dropbox */}}>Dropbox</li>
            <li onClick={() => {/* handle Local */}}>Local</li>
          </ul>
        )}
      </div>
    </div>
  );
}
