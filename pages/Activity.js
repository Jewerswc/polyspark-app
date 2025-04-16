import React, { useState } from 'react';
import Header from './Header';
import ActivityResultList from './ActivityResultList';
import Footer from './Footer';
import ChatOverlay from './ChatOverlay';
import SignupOverlay from './LoginOverlay';
import './Activity.module.css';

export default function App() {
  const [isSignupOverlayVisible, setSignupOverlayVisible] = useState(false);
  const openSignupOverlay = () => setSignupOverlayVisible(true);
  const closeSignupOverlay = () => setSignupOverlayVisible(false);

  const [isChatOverlayVisible, setChatOverlayVisible] = useState(false);
  const openChatOverlay = () => setChatOverlayVisible(true);
  const closeChatOverlay = () => setChatOverlayVisible(false);

  return (
    <div className="pageWrapper">
      <Header onSignupClick={openSignupOverlay} />
      <div className="mainContent">
        {/* Replace the PersonaCardRow and FeedCardGrid with ActivityResultList */}
        <ActivityResultList />
      </div>
      <Footer />

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
