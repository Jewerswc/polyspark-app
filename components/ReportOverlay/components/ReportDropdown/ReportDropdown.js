import React, { useState, useRef, useEffect } from 'react';
import styles from './ReportDropdown.module.css';

export default function ReportDropdown({
  options = [],
  selected,
  onSelect,
  placeholder = 'Select…',    // ← accept a placeholder prop
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // close when you click outside
  useEffect(() => {
    const onClickOutside = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, []);

  // Find the label for the currently selected value
  const selectedOption = options.find(opt => opt.value === selected);

  return (
    <div className={styles.container} ref={ref}>
      <button
        className={styles.toggle}
        onClick={() => setOpen(o => !o)}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {selectedOption
          ? selectedOption.label
          : placeholder          /* ← show placeholder when nothing’s selected */ }
      </button>

      {open && (
        <ul className={styles.menu}>
          {options.map(opt => (
            <li key={opt.value}>
              <button
                className={[
                  styles.menuItem,
                  opt.value === selected ? styles.active : '',
                ].join(' ')}
                onClick={() => {
                  onSelect(opt.value);
                  setOpen(false);
                }}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
