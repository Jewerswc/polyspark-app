// ActionsDropdown.jsx
import React, { useState } from 'react';
import ActionsButton from './components/ActionsButton';
import BrowseMenu from './components/BrowseDropdown/ActionDropdown';
import styles from './ActionsDropdown.module.css';

export default function ActionsDropdown() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={styles.dropdownContainer}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <ActionsButton onClick={() => console.log('Actions button clicked')} />
      {isVisible && (
        <div className={styles.dropdown}>
          <BrowseMenu />
        </div>
      )}
    </div>
  );
}
