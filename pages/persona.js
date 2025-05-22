import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from './layout/Header';
import Footer from './layout/Footer';
import ChatOverlay from './ui/ChatOverlay';
import SignupOverlay from './ui/LoginOverlay';
import SearchResultsOverlay from './ui/SearchResultsOverlay';
import HeaderMobile from './layout/Header/HeaderMobile';
import UserProfileCardMobile from './ui/LoginOverlayMobile';
import MoreOverlay from './ui/MoreOverlay';
import ChatOverlayIPhone from './ui/ChatOverlayIphone';
import LightboxOverlay from './ui/LightboxOverlay';
import { TRENDING } from './constants/CategoryConstants';
import Carousel from './personas/Carousel'
import popular from './personas/personas.json';
import active from './personas/active.json';
import newPersonas  from './personas/new.json';
import PersonaCardsRow from './personas/FeaturedRow';
import styles from './persona.module.css'
import CarouselMobile from './personas/CarouselMobile'

import FeaturedRowMobile from './personas/FeaturedRowMobile'
import MobileNavbar from './layout/MobileNavbar'
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < breakpoint);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [breakpoint]);
  return isMobile;
}

export default function PersonaPage() {
  const router = useRouter();
  const { category } = router.query;
  const isMobile = useIsMobile();

  const [searchOpen, setSearchOpen] = useState(false);
  const handleSearchClick = () => {
      if (moreOpen) {
      setMoreOpen(false);
        setOverlayMounted(false);
      }
      setSearchOpen(open => !open);
    };
  const closeSearch = () => setSearchOpen(false);

    
  const [activeCategory, setActiveCategory] = useState(category || TRENDING);
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    if (category && category !== activeCategory) setActiveCategory(category);
  }, [category]);

  const [lightboxSrc, setLightboxSrc] = useState(null);

  const [isSignupOverlayVisible, setSignupOverlayVisible] = useState(false);
  const [isChatOverlayVisible, setChatOverlayVisible] = useState(false);
  const [selectedPersona, setSelectedPersona] = useState(null);

  const openChatOverlay = (persona) => {
    setSelectedPersona(persona);
    setChatOverlayVisible(true);
  };
  const closeChatOverlay = () => setChatOverlayVisible(false);
  const closeSignupOverlay = () => setSignupOverlayVisible(false);
  const [activeLabel, setActiveLabel] = useState('Top');
  const [moreOpen, setMoreOpen] = useState(false);
  const [overlayMounted, setOverlayMounted] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const handleMoreClick = () => {
    if (!moreOpen) {
      setOverlayMounted(true);
      setMoreOpen(true);
    } else {
      setMoreOpen(false);
    }
  };
  const handleExited = () => setOverlayMounted(false);
  const openLogin = () => setLoginOpen(true);
  const closeLogin = () => setLoginOpen(false);
  const openLoginAndCloseMore = () => {
    if (moreOpen) {
      setMoreOpen(false);
      setOverlayMounted(false);
    }
    openLogin();
  };
  const openMobileChat = (persona) => setChatOpen(true);
  const closeMobileChat = () => setChatOpen(false);

  return (
    <div className={isMobile ? styles.pageWrapperMobile : styles.pageWrapper}>
      {isMobile ? (
        <> {/* Mobile Layout */}
          <HeaderMobile onLoginClick={openLogin} onSignupClick={openLogin} />
          <div className={styles.mainContentMobile}>
                     <FeaturedRowMobile onChatClick={openMobileChat} />
                     <CarouselMobile 
                     label="New"
                     personas={newPersonas}
                     onPersonaClick={openMobileChat}
                     />
                                          <CarouselMobile 
                     label="Most Active"
                     personas={active}
                     onPersonaClick={openMobileChat}
                     />
                                                              <CarouselMobile 
                     label="Popular"
                     personas={popular}
                     onPersonaClick={openMobileChat}
                     />
                     <MobileNavbar
                     onMoreClick={handleMoreClick} 
                     moreOpen={moreOpen} 
                     onSearchClick={handleSearchClick}
                     />
          </div>

          {loginOpen && <UserProfileCardMobile onClose={closeLogin} />}
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
              persona={selectedPersona?.slug}
              onClose={closeMobileChat}
            />
          )}
       
       {searchOpen && <SearchResultsOverlay onClose={closeSearch} />}
        </>
      ) : (
        <> {/* Desktop Layout */}
          <Header
            activeCategory={activeCategory}
            onCategorySelect={setActiveCategory}
          />
          <div className={styles.mainContent}>
            <PersonaCardsRow onChatClick={openChatOverlay} />
             <Carousel label="(12) Popular" personas={popular} />
             <Carousel label="(12) New" personas={newPersonas} />
             <Carousel label="(12) Most Active" personas={active} />
             <Carousel label="(12) Rising" personas={active} />

          </div>
          <Footer />

          {isChatOverlayVisible && selectedPersona && (
            <ChatOverlay
              persona={selectedPersona.slug}
              name={selectedPersona.name}
              avatarUrl={selectedPersona.image}
              onClose={closeChatOverlay}
            />
          )}
          {isSignupOverlayVisible && (
            <SignupOverlay
              onGoogleContinue={() => console.log('Google Continue')}
              onEmailContinue={(email) => console.log('Email submitted:', email)}
              onClose={closeSignupOverlay}
            />
          )}
        </>
      )}

      <LightboxOverlay src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </div>
  );
}
