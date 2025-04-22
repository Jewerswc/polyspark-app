// ActionsDropdown.jsx
import React, { useState } from 'react';
import PersonasButton from './Five Widgets/PersonasButton';
import BrowseMenu from './../../PersonasDropdown';
import styles from './ActionsDropdown.module.css';

export default function ActionsDropdown() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={styles.dropdownContainer}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <PersonasButton onClick={() => console.log('Actions button clicked')} />
      {isVisible && (
        <div className={styles.dropdown}>
          <BrowseMenu />
        </div>
      )}
    </div>
  );
}
