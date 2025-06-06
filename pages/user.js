import React, { useState, useEffect } from 'react';
import Header from './../components/Header/Header';
import HeaderMobile from './../components/Header/HeaderMobile';
import UserProfile from './../components/User/UserProfile';
import UserProfileMobile from './../components/User/UserProfileMobile';
import MobileNavbar from '../components/MobileNavbar/MobileNavbar';
import Footer from '../components/Footer/Footer';
import MoreOverlay from '../components/MoreOverlay/MoreOverlay';
import useIsMobile from '../components/hooks/useIsMobile';
import SignupOverlay from './../components/LoginOverlay/LoginOverlay';
import './user.module.css';

export default function App() {
  // ───────────────────────────────────────────────────────────────
  const [isSignupOverlayVisible, setSignupOverlayVisible] = useState(false);
  const openSignupOverlay = () => setSignupOverlayVisible(true);
  const closeSignupOverlay = () => setSignupOverlayVisible(false);

  // ───────────────────────────────────────────────────────────────
  const [moreOpen, setMoreOpen] = useState(false);
  const [overlayMounted, setOverlayMounted] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

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


  const isMobile = useIsMobile();

  return (
    <div className={isMobile ? 'pageWrapperMobile' : 'pageWrapper'}>
      {isMobile ? (
        <>
          <HeaderMobile onSignupClick={openSignupOverlay} mobile />
          <main className="mainContentMobile">
            <UserProfileMobile />
          </main>
          <MobileNavbar
            onMoreClick={handleMoreClick}
            moreOpen={moreOpen}
            onSearchClick={() => { /* …if you have a search overlay…*/ }}
          />
        </>
      ) : (
        <>
          <Header onSignupClick={openSignupOverlay} />
          <main className="mainContent">
            <UserProfile />
          </main>
          <Footer />
        </>
      )}

      {isSignupOverlayVisible && (
        <SignupOverlay
          onGoogleContinue={() => console.log('Google Continue')}
          onEmailContinue={(email) => console.log('Email submitted:', email)}
          onClose={closeSignupOverlay}
        />
      )}

      {overlayMounted && (
        <MoreOverlay
          onClose={handleMoreClick}
          onExited={handleExited}
          onLogin={openLoginAndCloseMore}
          onSignup={openLoginAndCloseMore}
        />
      )}

      {loginOpen && (
        <SignupOverlay
          onGoogleContinue={() => {
            console.log('Logged in via Google');
            closeLogin();
          }}
          onEmailContinue={(email) => {
            console.log('Login email:', email);
            closeLogin();
          }}
          onClose={closeLogin}
        />
      )}
    </div>
  );
}
