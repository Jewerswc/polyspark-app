import React, { useState } from 'react';
import HeaderMobile from './layout/Header/HeaderMobile'
import PersonaCardRowMobile from './PersonaCardRowMobile'
import './MainPage.module.css';
import styles from './MainPageMobile.module.css'
import FeedCardsColumn from './FeedCardColumn';
import NavbarMobile from './MobileNavbar'
import CategoriesRowMobile from './CategoriesRowMobile'

export default function App() {
  const [isSignupOverlayVisible, setSignupOverlayVisible] = useState(false);
  const openSignupOverlay = () => setSignupOverlayVisible(true);
  const closeSignupOverlay = () => setSignupOverlayVisible(false);

  const [isChatOverlayVisible, setChatOverlayVisible] = useState(false);
  const openChatOverlay = () => setChatOverlayVisible(true);
  const closeChatOverlay = () => setChatOverlayVisible(false);

  return (
    <div className={styles.pageWrapper}>
      {/* Pass openSignupOverlay as a prop */}
      <HeaderMobile />
      <div className={styles.mainContent}>
        <PersonaCardRowMobile />
        <CategoriesRowMobile />
        <FeedCardsColumn />
        <NavbarMobile />
      </div>

    </div>
  );
}
