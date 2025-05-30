import React, { useState, useEffect } from 'react';

import Header from './../components/Header/Header';
import HeaderMobile from './../components/Header/HeaderMobile'
import UserProfile from './../components/User/UserProfile';
import MobileNavbar from '../components/MobileNavbar/MobileNavbar';
import Footer from '../components/Footer/Footer';
import ChatOverlay from '../components/ChatOverlay/ChatOverlay';
import SignupOverlay from './../components/LoginOverlay/LoginOverlay';
import './user.module.css';

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

export default function App() {
  const [isSignupOverlayVisible, setSignupOverlayVisible] = useState(false);
  const openSignupOverlay = () => setSignupOverlayVisible(true);
  const closeSignupOverlay = () => setSignupOverlayVisible(false);

  const [isChatOverlayVisible, setChatOverlayVisible] = useState(false);
  const openChatOverlay = () => setChatOverlayVisible(true);
  const closeChatOverlay = () => setChatOverlayVisible(false);
  const isMobile = useIsMobile();

  return (
        <div className={isMobile ? 'pageWrapperMobile' : 'pageWrapper'}>
          {isMobile ? (
            <>
              {/* Mobile header could be a slimmer version, if you have one */}
              <HeaderMobile onSignupClick={openSignupOverlay} mobile />
              <main className="mainContentMobile">
                {/* maybe a mobile-friendly profile card */}
                <UserProfile mobile />
              </main>
                          <MobileNavbar
             
                          />
              {/* mobile nav / overlays */}
            </>
          ) : (
            <>
              {/* DESKTOP LAYOUT */}
              <Header onSignupClick={openSignupOverlay} />
              <main className="mainContent">
                <UserProfile />
              </main>
              <Footer />
            </>
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
