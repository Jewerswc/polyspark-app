import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ChatOverlay from '../components/ChatOverlay/ChatOverlay';
import SignupOverlay from './../components/LoginOverlay/LoginOverlay';
import SearchResultsOverlay from '../components/Header/components/Search/components/SearchResultsOverlay/SearchResultsOverlay';
import HeaderMobile from '../components/Header/HeaderMobile';
import UserProfileCardMobile from '../components/LoginOverlay/components/LoginOverlayMobile';
import MoreOverlay from '../components/MoreOverlay/MoreOverlay';
import ChatOverlayIPhone from '../components/ChatOverlay/ChatOverlayMobile';
import LightboxOverlay from './../components/Articles/LightboxOverlay';
import PersonaCardsRow from './personas/FeaturedRow';
import styles from './persona.module.css'
import FetchCarousel from './personas/FetchCarousel';
import CarouselMobile from './personas/CarouselMobile'

const TRENDING     = 'Trending';

import FeaturedRowMobile from './personas/FeaturedRowMobile'
import MobileNavbar from '../components/MobileNavbar/MobileNavbar'
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

export default function Persona({

  initialAgent,
    label,
  
    onHeaderClick,
    onChatClick,
    actionType,            // "chat" or "profile"
    profileUrlFn           // optional: (persona) => string
  }) {
  const router = useRouter();
  const category = router.query.category || 'popular';

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
  const [agent, setAgent] = useState(initialAgent);

  const [chatPersona, setChatPersona] = useState('');
  const [chatName, setChatName] = useState('');
  const [chatAvatarUrl, setChatAvatarUrl] = useState('');
  const [activeCategory, setActiveCategory] = useState(category || TRENDING);
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    if (category && category !== activeCategory) setActiveCategory(category);
  }, [category]);

  const [lightboxSrc, setLightboxSrc] = useState(null);

  const [isSignupOverlayVisible, setSignupOverlayVisible] = useState(false);
  const [isChatOverlayVisible, setChatOverlayVisible] = useState(false);
  const [selectedPersona, setSelectedPersona] = useState(null);
  const openChatOverlayMobile = () => {
    // grab the current agent and open
    setChatPersona(agent.handle)
    setChatName(agent.name)
    setIsChatOpen(true)
  }
const closeChatOverlayMobile = () => setIsChatOpen(false)


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
    const openMobileChat = (persona) => {
        setSelectedPersona(persona);
        setChatPersona(persona.handle);
        setChatName(persona.name);
        setChatAvatarUrl(persona.image);
        setChatOpen(true);
      };
  const closeMobileChat = () => setChatOpen(false);
  const [personas, setPersonas] = useState([]);
  useEffect(() => {
    // normalize to “popular” | “new” | “active” | “rising”
    const cat = category.toLowerCase().replace(/\W/g, '') || 'popular';
    fetch(`https://ionbackend.com/matching/personas/?category=${cat}`)
      .then(r => r.json())
      .then(data => setPersonas(data));
  }, [category]);

  return (
    <div className={isMobile ? styles.pageWrapperMobile : styles.pageWrapper}>
      {isMobile ? (
        <> {/* Mobile Layout */}
          <HeaderMobile onLoginClick={openLogin} onSignupClick={openLogin} />
          <div className={styles.mainContentMobile}>
                     <FeaturedRowMobile onChatClick={openMobileChat} />
                     <CarouselMobile
                      label="New"
                      categoryKey="new"
                      onPersonaClick={openMobileChat}
                    />
                    <CarouselMobile
                      label="Popular"
                      categoryKey="popular"
                      onPersonaClick={openMobileChat}
                    />
                    <CarouselMobile
                      label="Rising"
                      categoryKey="rising"
                      onPersonaClick={openMobileChat}
                    />
                                        <CarouselMobile
                      label="Most Active"
                      categoryKey="most active"
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
              persona={selectedPersona.slug}
              avatarUrl={selectedPersona.imageUrl}
              name={selectedPersona.name}
              onClose={closeMobileChat}
              onChatClick={openChatOverlayMobile}
              
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
                        <FetchCarousel
              label="(12) Popular"
              categoryKey="popular"
              onChatClick={openChatOverlay}
            />
                                   <FetchCarousel
              label="(12) New"
              categoryKey="new"
              onChatClick={openChatOverlay}
            />
                                               <FetchCarousel
              label="(12) Rising"
              categoryKey="rising"
              onChatClick={openChatOverlay}
            />
            <FetchCarousel
  label="Most Active"
  categoryKey="most_active"
  onChatClick={openChatOverlay}
/>

          </div>
          <Footer />

          {isChatOverlayVisible && selectedPersona && (
            <ChatOverlay
              persona={selectedPersona.slug}
              name={selectedPersona.name}
              avatarUrl={selectedPersona.imageUrl}
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
