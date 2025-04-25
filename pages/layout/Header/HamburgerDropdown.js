// HamburgerDropdown.jsx
import React, { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import DropdownMenu from './../../DropdownMenu';
import styles from './HamburgerDropdown.module.css';

export default function HamburgerDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  // Open the dropdown when hovering, close it when leaving the entire container.
  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  // Example menu items; adjust these based on login state or other logic later.
  const menuItems = (
    <ul className={styles.menuList}>
      <li className={styles.menuItem}>Sign In</li>
      <li className={styles.menuItem}>Sign Up</li>
      <li className={styles.menuItem}>Help</li>
    </ul>
  );

  return (
    <div
      className={styles.dropdownContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <HamburgerMenu />
      <DropdownMenu isOpen={isOpen}>
        {menuItems}
      </DropdownMenu>
    </div>
  );
}
