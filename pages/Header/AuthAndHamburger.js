
import React from 'react';
import AuthButtonsRow from './AuthButtonsRow';
import HamburgerMenu from './HamburgerMenu';
import HoverDropdown from '../HoverDropdown';
import styles from './AuthAndHamburger.module.css';

export default function AuthAndHamburgerRow({
  onLoginClick,
  onSignupClick
}) {
  const items = [
    { label: 'Sign Up',           onClick: onSignupClick },
    { label: 'Log In', divider: true, onClick: onLoginClick },
    { label: 'Personas',          onClick: () => {} },
    { label: 'Actions',           onClick: () => {} },
    { label: 'Report an Issue',   onClick: () => {} },
    { label: 'Privacy',           onClick: () => {} },
    { label: 'Terms of Use',      onClick: () => {} },
  ];

  return (
    <div className={styles.container}>
      <AuthButtonsRow
        onLoginClick={onLoginClick}
        onSignupClick={onSignupClick}
      />

      <HoverDropdown
        trigger={<HamburgerMenu />}
        items={items}
      />
    </div>
  );
}
