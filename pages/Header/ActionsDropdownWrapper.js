import React from 'react';
import ActionsButton from '../Five Widgets/ActionsButton';
import BrowseMenu from './ActionDropdown'; // Adjust the path if necessary
import styles from './ActionDropdown.module.css';

export default function ActionsDropdown({ onClick }) {
  return (
    <div className={styles.dropdownContainer}>
      <ActionsButton onClick={onClick} />
      <div className={styles.dropdownMenu}>
        <BrowseMenu />
      </div>
    </div>
  );
}
