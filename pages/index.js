import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from './layout/Header';
import PersonaCardRow from './PersonaCards/PersonaCardRow';
import FeedWithToolbar from './layout/FeedWithToolbar';
import FeedCardGrid from './layout/FeedCardGrid';
import Footer from './layout/Footer';
import ChatOverlay from './ui/ChatOverlay';
import SignupOverlay from './ui/LoginOverlay';

// Mobile imports
import HeaderMobile from './layout/Header/HeaderMobile';
import PersonaCardRowMobile from './PersonaCards/PersonaCardRowMobile';
import CategoriesRowMobile from './ui/CategoriesRowMobile';
import FeedCardsColumn from './layout/FeedCardColumn';
import NavbarMobile from './layout/MobileNavbar';
import UserProfileCardMobile from './ui/LoginOverlayMobile';
import MoreOverlay from './ui/MoreOverlay';
import ChatOverlayIPhone from './ui/ChatOverlayIphone';

import LightboxOverlay from './LightboxOverlay';
import './MainPage.module.css';
import './MainPageMobile.module.css';
import { TRENDING } from './constants/CategoryConstants';

// Hook to detect mobile viewport
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

export default function MainPage() {
  const router = useRouter();
  const { category } = router.query;
  const isMobile = useIsMobile();

  // Desktop state
  const [activeCategory, setActiveCategory] = useState(category || TRENDING);
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    if (category && category !== activeCategory) setActiveCategory(category);
  }, [category]);

  // Shared overlay state
  const [lightboxSrc, setLightboxSrc] = useState(null);

  // Desktop overlays
  const [isSignupOverlayVisible, setSignupOverlayVisible] = useState(false);
  const [isChatOverlayVisible, setChatOverlayVisible] = useState(false);
  const [selectedPersona, setSelectedPersona] = useState(null);

  const openChatOverlay = (persona) => {
    setSelectedPersona(persona);
    setChatOverlayVisible(true);
  };
  const closeChatOverlay = () => setChatOverlayVisible(false);
  const closeSignupOverlay = () => setSignupOverlayVisible(false);

  // Mobile state & overlays
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
    <div className={isMobile ? 'pageWrapperMobile' : 'pageWrapper'}>
      {isMobile ? (
        <> {/* Mobile Layout */}
          <HeaderMobile onLoginClick={openLogin} onSignupClick={openLogin} />
          <div className="mainContentMobile">
            <PersonaCardRowMobile onChatClick={openMobileChat} />
            <CategoriesRowMobile
              activeLabel={activeLabel}
              onLabelClick={setActiveLabel}
            />
            <FeedCardsColumn
              activeLabel={activeLabel}
              onImageClick={setLightboxSrc}
            />
            <NavbarMobile onMoreClick={handleMoreClick} moreOpen={moreOpen} />
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
        </>
      ) : (
        <> {/* Desktop Layout */}
          <Header
            activeCategory={activeCategory}
            onCategorySelect={setActiveCategory}
          />
          <div className="mainContent">
            <PersonaCardRow onChatClick={openChatOverlay} />
            <FeedWithToolbar
              activeCategory={activeCategory}
              onCategorySelect={setActiveCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onImageClick={setLightboxSrc}
            />
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
