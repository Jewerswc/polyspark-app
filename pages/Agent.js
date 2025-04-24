import React, { useState, useEffect } from 'react';
import Header from './layout/Header';
import HeaderMobile from './layout/Header/HeaderMobile'
import AgentandNavbar from './agent/ProfileLayout'
import Footer from './layout/Footer';
import MobileNavbar from './layout/MobileNavbar'
import ChatOverlay from './ui/ChatOverlay';
import SignupOverlay from './LoginOverlay';
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
          : <Header             onSignupClick={openSignupOverlay} />}      <div className="mainContent">
        {/* Replace the PersonaCardRow and FeedCardGrid with ActivityResultList */}
        <AgentandNavbar
  agents={[{ id:1, name: 'Alex' }, { id:2, name: 'Jess' }]}
  onChatClick={(name) => {
    console.log("Chat clicked for", name);
    setChatOverlayVisible(true);
  }}
/>
  {isChatOverlayVisible && (
        <ChatOverlay onClose={closeChatOverlay} />
      )}
      </div>
            {isMobile
                ? <MobileNavbar />
                : <Footer />}



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
