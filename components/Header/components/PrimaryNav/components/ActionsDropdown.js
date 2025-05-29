// ActionsDropdown.jsx
import React, { useState } from 'react';
import ActionsButton from './ActionsDropdown/components/ActionsButton';
import BrowseMenu from './ActionsDropdown/components/BrowseDropdown/BrowseDropdown';
import styles from './ActionsDropdown/ActionsDropdown.module.css';

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
