import React, { useState } from 'react';
import Header from './layout/Header';
import UserProfile from './UserProfile';

import Footer from './layout/Footer';
import ChatOverlay from './ChatOverlay';
import SignupOverlay from './LoginOverlay';
import './user.module.css';

export default function App() {
  const [isSignupOverlayVisible, setSignupOverlayVisible] = useState(false);
  const openSignupOverlay = () => setSignupOverlayVisible(true);
  const closeSignupOverlay = () => setSignupOverlayVisible(false);

  const [isChatOverlayVisible, setChatOverlayVisible] = useState(false);
  const openChatOverlay = () => setChatOverlayVisible(true);
  const closeChatOverlay = () => setChatOverlayVisible(false);

  return (
    <div className="pageWrapper">
      {/* Pass openSignupOverlay as a prop */}
      <Header onSignupClick={openSignupOverlay} />
      <div className="mainContent">
        <UserProfile />
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
