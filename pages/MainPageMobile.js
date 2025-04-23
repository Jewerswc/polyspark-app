import React, { useState } from 'react';
import HeaderMobile from './layout/Header/HeaderMobile'
import PersonaCardRowMobile from './PersonaCards/PersonaCardRowMobile'
import './MainPage.module.css';
import styles from './MainPageMobile.module.css'
import FeedCardsColumn from './FeedCardColumn';
import NavbarMobile from './layout/MobileNavbar'
import CategoriesRowMobile from './ui/CategoriesRowMobile'
import UserProfileCard from './LoginOverlayMobile'; 
import MoreOverlay from './MoreOverlay'

export default function App() {
    // null | 'login' | 'more'
    const [overlay, setOverlay] = useState(null);
    const openLogin = () => setOverlay('login');
    const openMore  = () => setOverlay('more');
    const closeOverlay = () => setOverlay(null);

  return (
    <div className={styles.pageWrapper}>
      {/* Pass openSignupOverlay as a prop */}
      <HeaderMobile onLoginClick={openLogin} onSignupClick={openLogin} />
      <div className={styles.mainContent}>
        <PersonaCardRowMobile />
        <CategoriesRowMobile />
        <FeedCardsColumn />
        <NavbarMobile onMoreClick={openMore} />
      </div>
      {overlay === 'login' && <UserProfileCard   onClose={closeOverlay} />}
      {overlay === 'more' && <MoreOverlay onClose={closeOverlay} />}
    </div>
  );
}
