import React, { useState, useEffect } from 'react';
import Header from './layout/Header';
import ActivityResultList from './activity/ResultList';
import Footer from './layout/Footer';
import ChatOverlay from './ui/ChatOverlay';
import SignupOverlay from './ui/LoginOverlay';
import HeaderMobile from './layout/Header/HeaderMobile';
import MobileNavbar from './layout/MobileNavbar'
import './Activity.module.css';

export default function Activity() {
  const [isSignupOverlayVisible, setSignupOverlayVisible] = useState(false);
  const openSignupOverlay = () => setSignupOverlayVisible(true);
  const closeSignupOverlay = () => setSignupOverlayVisible(false);

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
          ? <MobileNavbar />
          : <Footer />}
      

      {isChatOverlayVisible && (
        <ChatOverlay onClose={closeChatOverlay} />
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
