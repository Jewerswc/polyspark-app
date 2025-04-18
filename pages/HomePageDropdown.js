import React, { useState, useRef, useEffect } from 'react';
import Button from './HomePageDropdownButton';
import styles from './HomePageDropdown.module.css';

export default function HomePageDropdown({
  triggerLabel,
  items // array of { label: string, onClick: ()=>void, divider?: boolean }
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef();

  // close when clicking outside
  useEffect(() => {
    const onClickOutside = e => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, []);

  return (
    <div className={styles.dropdown} ref={containerRef}>
      <Button
        label={triggerLabel}
        onClick={() => setOpen(o => !o)}
        buttonColor="#fff"
      />
      {open && (
        <div className={styles.menu}>
          {items.map((item, i) => (
            <React.Fragment key={i}>
              <Button
                label={item.label}
                onClick={() => {
                  setOpen(false);
                  item.onClick();
                }}
              />
              {item.divider && <div className={styles.divider} />}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
