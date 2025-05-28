import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import HeaderMobile from '../components/Header/HeaderMobile'
import AgentandNavbar from './../components/Agents/ProfileLayout'
import Footer from '../components/Footer/Footer';
import NavbarMobile from '../components/MobileNavbar/MobileNavbar';
import MoreOverlay from '../components/MoreOverlay/MoreOverlay';
import ChatOverlay from '../components/ChatOverlay/ChatOverlay';
import SignupOverlay from './../components/LoginOverlay/LoginOverlay';
import ProfileLayoutMobile from './../components/Agents/ProfileLayoutMobile'
import './Activity.module.css';

export default function ProfileLayout({ handle }) {
  const [agent, setAgent] = useState(null);

  useEffect(() => {
    fetch(`https://ionbackend.com/matching/api/agent/{handle}/`)
      .then((res) => res.json())
      .then(setAgent);
  }, [handle]);

  const [isSignupOverlayVisible, setSignupOverlayVisible] = useState(false);
  const openSignupOverlay = () => setSignupOverlayVisible(true);
  const closeSignupOverlay = () => setSignupOverlayVisible(false);
  const [moreOpen, setMoreOpen]             = useState(false);
  const [overlayMounted, setOverlayMounted] = useState(false);

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

      {isMobile
          ? 
          <ProfileLayoutMobile agent={agent} />
      


:         <AgentandNavbar
            agent={agent}
            onChatClick={(name) => {
              console.log("Chat clicked for", name);
              setChatOverlayVisible(true);
            }}
            />}      

  {isChatOverlayVisible && (
        <ChatOverlay 
        persona="alexdoe"
        onClose={closeChatOverlay} />
      )}
      </div>
            {isMobile
                ?         <NavbarMobile
                          onMoreClick={handleMoreClick}
                          moreOpen={moreOpen}
                        />
                : <Footer />}


    {overlayMounted && (
        <MoreOverlay
          onClose={handleMoreClick}
          onExited={handleExited}
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
