import React, { useState } from 'react';
import HeaderMobile          from './layout/Header/HeaderMobile';
import PersonaCardRowMobile  from './PersonaCards/PersonaCardRowMobile';
import CategoriesRowMobile   from './ui/CategoriesRowMobile';
import FeedCardsColumn       from './layout/FeedCardColumn';
import NavbarMobile          from './layout/MobileNavbar';
import UserProfileCard       from './ui/LoginOverlayMobile';
import MoreOverlay           from './ui/MoreOverlay';
import ChatOverlayIPhone     from './ui/ChatOverlayIphone';
import styles                from './MainPageMobile.module.css';

export default function App() {
  const [moreOpen, setMoreOpen]             = useState(false);
  const [overlayMounted, setOverlayMounted] = useState(false);
  const [activeLabel, setActiveLabel] = useState('Top')

  const handleMoreClick = () => {
    if (!moreOpen) {
      setOverlayMounted(true);
      setMoreOpen(true);
    } else {
      setMoreOpen(false);
    }
  };

  const handleExited = () => {
    setOverlayMounted(false);
  };

  const [loginOpen, setLoginOpen] = useState(false);
  const openLogin  = () => setLoginOpen(true);
  const closeLogin = () => setLoginOpen(false);

 const openLoginAndCloseMore = () => {
     if (moreOpen) {
       setMoreOpen(false);
       setOverlayMounted(false);
     }
     openLogin();
    };
  const [chatOpen, setChatOpen] = useState(false);
  const openChat = (personaName) => {
    setChatOpen(true);
  };
  const closeChat = () => setChatOpen(false);

  return (
    <div className={styles.pageWrapper}>
      <HeaderMobile
        onLoginClick={openLogin}
        onSignupClick={openLogin}
      />

      <div className={styles.mainContent}>
        <PersonaCardRowMobile onChatClick={openChat} />
      <CategoriesRowMobile
        activeLabel={activeLabel}            // ← PASS it in
        onLabelClick={setActiveLabel}        // ← PASS the setter
        // you can still allow defaultCategories via props if you want
      />     
        
        <FeedCardsColumn activeLabel={activeLabel} />

        <NavbarMobile
          onMoreClick={handleMoreClick}
          moreOpen={moreOpen}
        />
      </div>

      {loginOpen && <UserProfileCard onClose={closeLogin} />}

      {overlayMounted && (
          <MoreOverlay
            onClose={handleMoreClick}
            onExited={handleExited}
            onLogin={openLoginAndCloseMore}
            onSignup={openLoginAndCloseMore}
          />
        )}

      {chatOpen && (
        <ChatOverlayIPhone
          apiKey={process.env.REACT_APP_OPENAI_API_KEY}
          onClose={closeChat}
        />
      )}
    </div>
  );
}