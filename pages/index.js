import React, { useState } from 'react';
import Header from './layout/Header';
import PersonaCardRow from './PersonaCards/PersonaCardRow';
import Footer from './layout/Footer';
import ChatOverlay from './ui/ChatOverlay';
import SignupOverlay from './ui/LoginOverlay';
import './MainPage.module.css';
import FeedWithToolbar from './layout/FeedWithToolbar';
import LightboxOverlay from './LightboxOverlay';

export default function App() {
  const [isSignupOverlayVisible, setSignupOverlayVisible] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState(null);
const closeSignupOverlay = () => setSignupOverlayVisible(false);

  const [isChatOverlayVisible, setChatOverlayVisible] = useState(false);

  const openChatOverlay = () => {
    setChatOverlayVisible(true);
  };

  const closeChatOverlay = () => {
    setChatOverlayVisible(false);
  };

  return (
    <div>
      <Header />
      <div>
        <PersonaCardRow onChatClick={(name) => {
          console.log("Chat clicked for", name);
          openChatOverlay();
        }} />
  <FeedWithToolbar onImageClick={setLightboxSrc} />
      </div>
      <Footer />



      {isChatOverlayVisible && (
        <ChatOverlay 
        persona="jamesbarker"
          onClose={closeChatOverlay}
        />
      )}

{isSignupOverlayVisible && (
  <SignupOverlay 
    onGoogleContinue={() => console.log("Google Continue")}
    onEmailContinue={(email) => console.log("Email submitted:", email)}
    onClose={closeSignupOverlay}
  />
)}

    {/* <<< our lightbox overlay >>> */}
     <LightboxOverlay
       src={lightboxSrc}
       onClose={() => setLightboxSrc(null)}
     />
    </div>
  );
}