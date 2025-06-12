
import React from 'react';
import { useRouter } from 'next/router'
import AuthButtonsRow from './components/AuthButtons/AuthButtons';
import HamburgerMenu from './components/Hamburger/HamburgerMenu';
import Dropdown from './components/HoverMenu/Dropdown';
import styles from './PublicNav.module.css';

export default function AuthAndHamburgerRow({
  onLoginClick,
  onSignupClick,
  onReportClick 
}) {
  const router = useRouter()
  const items = [
    { label: 'Sign Up',           onClick: onSignupClick },
    { label: 'Log In', divider: true, onClick: onLoginClick },
    { label: 'Trending',        onClick: () => router.push('/') },  
    { label: 'Personas',        onClick: () => router.push('/persona') },  
    { label: 'Activity',        onClick: () => router.push('/Activity') },  

    { label: 'Report an Issue',   onClick: onReportClick },
    { label: 'Privacy',          onClick: () => router.push('/privacy') },  
    { label: 'Terms of Use',     onClick: () => router.push('/terms') }, 
  ];

  return (
    <div className={styles.container}>
      <AuthButtonsRow
        onLoginClick={onLoginClick}
        onSignupClick={onSignupClick}
      />

      <Dropdown
        trigger={<HamburgerMenu />}
        items={items}
      />
    </div>
  );
}
