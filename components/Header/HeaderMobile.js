import React, { useContext } from 'react';
 import Logo from './components/Logo/LogoMobile';
 import LoginButton from './components/AuthControls/AuthButtons/LoginButton/LoginButton';
 import SignUpButton from './components/AuthControls/AuthButtons/SignupButton/SignupButton';
import styles from './HeaderMobile.module.css';
import { AuthContext } from './../../lib/AuthContext';      // ← pull in your context
import AvatarMenu from '../Header/AvatarMenu';            // ← make sure path is correct

import Link from 'next/link';

export default function HeaderMobile({
  onLoginClick,
  onSignupClick,
  onReportClick       // ← new: pass this from parent
}) {
  const { isLoggedIn, user, logout } = useContext(AuthContext);

   return (
     <header className={styles.siteheader}>
       <div className={styles.container}>
         <Link href="/" className={styles.brand}>
           <Logo />
         </Link>
        <div className={styles.navactions}>
          {isLoggedIn && user ? (
            <AvatarMenu
              src={user.avatarUrl}
              username={user.username}
              alt={`${user.username}’s avatar`}
              size={32}
              onReportClick={onReportClick}
              onLogout={logout}
            />
          ) : (
            <>
              <LoginButton onClick={onLoginClick} />
              <SignUpButton onClick={onSignupClick} />
            </>
          )}
        </div>
       </div>
     </header>
   );
 }
