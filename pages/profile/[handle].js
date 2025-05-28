import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import HeaderMobile from '../../components/Header/HeaderMobile'
import AgentandNavbar from './../../components/Agents/ProfileLayout'
import Footer from '../../components/Footer/Footer';
import NavbarMobile from '../../components/MobileNavbar/MobileNavbar';
import MoreOverlay from '../../components/MoreOverlay/MoreOverlay';
import ChatOverlay from '../../components/ChatOverlay/ChatOverlay';
import SignupOverlay from './../../components/LoginOverlay/LoginOverlay';
import ProfileLayoutMobile from './../../components/Agents/ProfileLayoutMobile'
import ChatOverlayIPhone from '../../components/ChatOverlay/ChatOverlayIphone';
import { useRouter } from 'next/router';
import LoginOverlayMobile from './../../components/LoginOverlay/components/LoginOverlayMobile';
import LightboxOverlay from './../../components/Articles/LightboxOverlay';
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
  const openLogin = () => setLoginOpen(true);
  const [loginOpen, setLoginOpen] = useState(false);
  
  const closeLogin = () => setLoginOpen(false);
  const openLoginAndCloseMore = () => {
    if (moreOpen) {
      setMoreOpen(false);
      setOverlayMounted(false);
    }
    openLogin();
  };
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
          ? <HeaderMobile onLoginClick={openLogin} onSignupClick={openLogin} />
          : <Header             onSignupClick={openSignupOverlay} />}      
      
            {/* Mobile vs Desktop login/signup */}
      {loginOpen && (
        isMobile
          ? <LoginOverlayMobile onClose={closeLogin} />
          : <SignupOverlay
              onGoogleContinue={() => console.log("Google Continue")}
              onEmailContinue={email => console.log("Email submitted:", email)}
              onClose={closeLogin}
            />
      )}


      <div className="mainContent">

      {isMobile ? (
   <ProfileLayoutMobile
              onChatClick={openChatOverlayMobile}
              handle={agent?.handle}
              agentHandle={agent?.handle}
              agentName={agent?.name}

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
          onLoginSuccess={() => {
            setOverlayVisible(false);          
          }}
        />
      )}

           <LightboxOverlay
             src={lightboxSrc}
             onClose={() => setLightboxSrc(null)}
           />
    </div>
  );
}
