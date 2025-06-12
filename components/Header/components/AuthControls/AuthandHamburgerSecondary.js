import React from 'react';
import { useRouter } from 'next/router'
import AuthButtonsSecondary from './AuthButtons/AuthButtonsSecondary'
import styles from './AuthandHamburgerSecondary.module.css';
import HamburgerMenu from './Hamburger/HamburgerMenu';
import Dropdown from './../PublicNav/components/HoverMenu/Dropdown'

export default function AuthButtonsContainer({ onLoginClick, onSignupClick }) {
    const router = useRouter()
    const items = [
      { label: 'Sign Up',           onClick: onSignupClick },
      { label: 'Log In', divider: true, onClick: onLoginClick },
      { label: 'Trending',        onClick: () => router.push('/') },  

      { label: 'Personas',        onClick: () => router.push('/persona') },  
      { label: 'Activity',        onClick: () => router.push('/Activity') },  
  
      { label: 'Privacy',           onClick: () => {} },
      { label: 'Terms of Use',      onClick: () => {} },
    ];
  return (
    <div className={styles.buttonContainer}>
        <AuthButtonsSecondary 
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
