import React, { useState, useEffect } from 'react';
import Header from './layout/Header';
import ActivityResultList from './activity/ResultList';
import Footer from './layout/Footer';
import ChatOverlay from './ui/ChatOverlay';
import SignupOverlay from './ui/LoginOverlay';
import HeaderMobile from './layout/Header/HeaderMobile';
import MobileNavbar from './layout/MobileNavbar'
import MoreOverlay from './ui/MoreOverlay';
import SearchResultsOverlay from './ui/SearchResultsOverlay';
import './Activity.module.css';

export default function Activity() {
  const [isSignupOverlayVisible, setSignupOverlayVisible] = useState(false);
  const openSignupOverlay = () => setSignupOverlayVisible(true);
  const closeSignupOverlay = () => setSignupOverlayVisible(false);
  const [overlayMounted, setOverlayMounted] = useState(false);
  const [moreOpen, setMoreOpen]             = useState(false);
  
  const [searchOpen, setSearchOpen] = useState(false);
  const handleSearchClick = () => {
      // if “more” is open, close it first (optional)
      if (moreOpen) {
      setMoreOpen(false);
        setOverlayMounted(false);
      }
      setSearchOpen(open => !open);
    };
  const closeSearch = () => setSearchOpen(false);


  const handleMoreClick = () => {
    if (!moreOpen) {
      setOverlayMounted(true);
      setMoreOpen(true);
    } else {
      setMoreOpen(false);
    }
  };

  const [loginOpen, setLoginOpen] = useState(false);
  const openLogin  = () => setLoginOpen(true);


  const openLoginAndCloseMore = () => {
    if (moreOpen) {
      setMoreOpen(false);
      setOverlayMounted(false);
    }
    openLogin();
   };
  const handleExited = () => {
    setOverlayMounted(false);
  };
  const [isChatOverlayVisible, setChatOverlayVisible] = useState(false);
  const openChatOverlay = () => setChatOverlayVisible(true);
  const closeChatOverlay = () => setChatOverlayVisible(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();  // initial check
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);


  
  return (
    <div className="pageWrapper">
      {isMobile
          ? <HeaderMobile onSignupClick={openSignupOverlay} />
          : <Header             onSignupClick={openSignupOverlay} />}
      

      <div className="mainContent">

        <ActivityResultList />
      </div>

      {isMobile
          ? <MobileNavbar 
          onMoreClick={handleMoreClick}
          moreOpen={moreOpen}
          onSearchClick={handleSearchClick}

          />
          : <Footer />}
      
       {searchOpen && <SearchResultsOverlay onClose={closeSearch} />}

      {isChatOverlayVisible && (
        <ChatOverlay onClose={closeChatOverlay} />
      )}
      {overlayMounted && (
          <MoreOverlay
            onClose={handleMoreClick}
            onExited={handleExited}
            onLogin={openLoginAndCloseMore}
            onSignup={openLoginAndCloseMore}
          />
        )}
      {isSignupOverlayVisible && (
        <SignupOverlay 
          onGoogleContinue={() => console.log("Google Continue")}
          onEmailContinue={(email) => console.log("Email submitted:", email)}
          onClose={closeSignupOverlay}
        />
      )}
    </div>
  );
}
