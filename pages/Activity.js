import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import ActivityResultList from './../components/Activity/components/ResultList';
import Footer from '../components/Footer/Footer';
import ChatOverlay from '../components/ChatOverlay/ChatOverlay';
import SignupOverlay from './../components/LoginOverlay/components/LoginOverlay';
import HeaderMobile from '../components/Header/HeaderMobile';
import MobileNavbar from '../components/MobileNavbar/MobileNavbar'
import MoreOverlay from '../components/MoreOverlay/MoreOverlay';
import LoginOverlayMobile from './../components/LoginOverlay/components/LoginOverlayMobile';
import SearchResultsOverlay from '../components/Header/components/Search/components/SearchResultsOverlay/SearchResultsOverlay';
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
  const closeLogin = () => setLoginOpen(false);


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
          ?            <HeaderMobile 
                        onMoreClick={handleMoreClick}
                        moreOpen={moreOpen}
                        onSearchClick={handleSearchClick}
                        // make the mobile “signup” button actually open the mobile login overlay:
                        onSignupClick={openLogin}
                        // if you have a separate login button, wire that too:
                        onLoginClick={openLogin}
                      />
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
      {/* Mobile-login vs Desktop-signup */}
      {loginOpen && (
        isMobile
          ? <LoginOverlayMobile onClose={closeLogin} />
          : <SignupOverlay
              onGoogleContinue={() => console.log("Google Continue")}
              onEmailContinue={email => console.log("Email submitted:", email)}
              onClose={closeLogin}
            />
      )}

      {/* if you still want a separate desktop-only “signup” flow */}
      {isSignupOverlayVisible && !isMobile && (
        <SignupOverlay
          onGoogleContinue={() => console.log("Google Continue")}
          onEmailContinue={email => console.log("Email submitted:", email)}
          onClose={closeSignupOverlay}
        />
      )}
    </div>
  );
}
