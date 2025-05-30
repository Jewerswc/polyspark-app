// src/components/PersonasDropdown/PersonasDropdown.jsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import PersonasButton from './PersonasButton/PersonasButton';
import BrowseMenu from './ActionsDropdown/components/PersonasDropdown/PersonasDropdown';    // this is your existing BrowseMenu
import styles from './PersonasDropdown.module.css';

export default function PersonasDropdown() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  return (
    <div
      className={styles.dropdownContainer}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {/* always-visible button */}
      <PersonasButton onClick={() => router.push('/persona')} />



      {/* hover menu */}
      {isVisible && (
        <div className={styles.dropdown}>
          <BrowseMenu />
        </div>
      )}
    </div>
  );
}
