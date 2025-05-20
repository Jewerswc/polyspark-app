import React, { useState, useEffect } from 'react';
import Header from './../layout/Header';
import HeaderMobile from './../layout/Header/HeaderMobile'
import AgentandNavbar from './../agent/ProfileLayout'
import Footer from './../layout/Footer';
import NavbarMobile from './../layout/MobileNavbar';
import MoreOverlay from './../ui/MoreOverlay';
import ChatOverlay from './../ui/ChatOverlay';
import SignupOverlay from './../ui/LoginOverlay';
import ProfileLayoutMobile from './../agent/ProfileLayoutMobile'
import ChatOverlayIPhone from '../ui/ChatOverlayIphone';
import { useRouter } from 'next/router';
import LightboxOverlay from './../LightboxOverlay';
import './../Activity.module.css';

export default function ProfileLayout({ initialAgent }) {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const { query } = useRouter();
  const { handle } = query;     
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [agent, setAgent] = useState(initialAgent);
  const [chatAvatarUrl, setChatAvatarUrl] = useState('');
   const openChatOverlayMobile = () => {
       // grab the current agent and open
       setChatPersona(agent.handle)
       setChatName(agent.name)
       setIsChatOpen(true)
     }
  const closeChatOverlayMobile = () => setIsChatOpen(false)

  useEffect(() => {
    if (!handle || agent) return;
    fetch(`https://ionbackend.com/matching/api/agent/${handle}/`)
      .then((res) => res.json())
      .then(setAgent)
      .catch(console.error);
  }, [handle, agent]);

  const [isSignupOverlayVisible, setSignupOverlayVisible] = useState(false);
  const openSignupOverlay = () => setSignupOverlayVisible(true);
  const closeSignupOverlay = () => setSignupOverlayVisible(false);
  const [moreOpen, setMoreOpen]             = useState(false);
  const [overlayMounted, setOverlayMounted] = useState(false);
  const [chatPersona, setChatPersona] = useState('');
  const [chatName, setChatName] = useState('');
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

      {isMobile ? (
   <ProfileLayoutMobile
              onChatClick={openChatOverlayMobile}
 
    agent={agent}
    onImageClick={setLightboxSrc}
    
  />
) : (
  <AgentandNavbar
  agent={agent}
  handle={agent?.handle}
  agentHandle={agent?.handle}
  agentName={agent?.name}
  onChatClick={() => {
    // Set persona and name based on agent data
    setChatPersona(agent.handle);
    setChatName(agent.name);
    openChatOverlay();
  }}
  onImageClick={setLightboxSrc}
/>
)}

{isChatOpen && (
        <ChatOverlayIPhone
          onClose={closeChatOverlayMobile}
          persona={chatPersona}
          name={chatName}
          avatarUrl={agent.avatar_url} 
        />
      )}
{isChatOverlayVisible && (
          <ChatOverlay
            persona={chatPersona}
            name={chatName}
            onClose={closeChatOverlay}
            avatarUrl={agent.avatar_url} 
          />
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

           <LightboxOverlay
             src={lightboxSrc}
             onClose={() => setLightboxSrc(null)}
           />
    </div>
  );
}
